import { render, screen, act, fireEvent } from '@testing-library/react';
import axios from 'axios';

import PropertiesListScreen from '../PropertiesListScreen';
import IProperty, { mockProperty } from 'domains/properties/models/IProperty';
import { API_STORAGE_KEY } from 'lib/data/api';

const mockProperties: IProperty[] = [];
for (let i = 0; i < 51; i++) {
  mockProperties.push({
    ...mockProperty,
    mlsId: i + 1,
  });
}

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    status: 300,
    data: [],
  }),
}));

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('when the api responses are cached', () => {
  describe('when the list is initially rendered', () => {
    it('should render the initial list of properties', async () => {
      localStorage.setItem(
        API_STORAGE_KEY,
        JSON.stringify({
          '/properties?limit=25&offset=0': mockProperties.slice(0, 25),
          '/properties?limit=25&offset=25': mockProperties.slice(25, 25),
          '/properties?limit=25&offset=50': mockProperties.slice(50),
        }),
      );
      await act(async () => {
        render(<PropertiesListScreen />);
      });
      // expect(screen.getByRole('heading').textContent).toEqual('Property List');
      expect(screen.getAllByTestId(/[0-9]+-property-card/).length).toBe(25);
      expect(axios.get).not.toHaveBeenCalled();
    });

    describe('when the page is scrolled to the bottom', () => {
      it('should get and render the next batch of properties', async () => {
        localStorage.setItem(
          API_STORAGE_KEY,
          JSON.stringify({
            '/properties?limit=25&offset=0': mockProperties.slice(0, 25),
            '/properties?limit=25&offset=25': mockProperties.slice(25, 25),
            '/properties?limit=25&offset=50': mockProperties.slice(50),
          }),
        );
        await act(async () => {
          render(<PropertiesListScreen />);
        });
        await act(async () => {
          await fireEvent.scroll(window, { target: { scrollY: 9999 } });
          render(<PropertiesListScreen />);
        });
        expect(axios.get).not.toHaveBeenCalled();
        expect(screen.getAllByTestId(/[0-9]+-property-card/).length).toBe(50);
      });
    });
  });
});

describe('when the api response are not cached', () => {
  it('should make api request', async () => {
    await act(async () => {
      render(<PropertiesListScreen />);
    });
    expect(axios.get).toHaveBeenCalled();
    expect(screen.getByTestId('blankslate').textContent).toBe('No Results');
  });
});
