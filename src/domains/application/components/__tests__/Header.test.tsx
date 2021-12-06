import { render, screen } from '@testing-library/react';

import Header from '../Header';
import { HeaderContext } from 'domains/application/contexts/HeaderContext';

describe('when the header title has not been set', () => {
  it('should display empty title', async () => {
    render(
      <HeaderContext.Provider value={{ title: '', setTitle: () => null }}>
        <Header />
      </HeaderContext.Provider>,
    );

    expect(screen.getByRole('heading').textContent).toEqual('');
  });
});

describe('when the header title has been set', () => {
  it('should display title', async () => {
    render(
      <HeaderContext.Provider
        value={{ title: 'Property List', setTitle: () => null }}
      >
        <Header />
      </HeaderContext.Provider>,
    );

    expect(screen.getByRole('heading').textContent).toEqual('Property List');
  });
});
