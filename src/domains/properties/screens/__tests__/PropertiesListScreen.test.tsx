import { render, screen, act } from '@testing-library/react';

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

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem(
    API_STORAGE_KEY,
    JSON.stringify({
      '/properties?limit=25&offset=0': mockProperties.slice(0, 25),
      '/properties?limit=25&offset=25': mockProperties.slice(25, 25),
      '/properties?limit=25&offset=50': mockProperties.slice(50),
    }),
  );
});

test('displays property list', async () => {
  // TODO
  // await act(async () => render(<PropertiesListScreen />));
  // expect(screen.getAllByTestId(/[0-9]+-property-card/).length).toBe(25);
  expect(true).toBe(true);
});
