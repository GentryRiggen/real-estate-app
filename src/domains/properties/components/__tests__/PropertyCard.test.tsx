import { render, screen } from '@testing-library/react';

import PropertyCard from '../PropertyCard';
import {
  FAVORITES_STORAGE_KEY,
  PropertyFavoritesProvider,
} from 'domains/properties/contexts/FavoritePropertiesContext';
import { mockProperty } from 'domains/properties/models/IProperty';

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify({ 1: true }));
});

describe('when the property has all details', () => {
  it('displays all property summary details', async () => {
    render(
      <PropertyFavoritesProvider>
        <PropertyCard item={mockProperty} />
      </PropertyFavoritesProvider>,
    );

    expect((screen.getByTestId('1-thumbnail') as HTMLImageElement).src).toBe(
      mockProperty.photos[0],
    );
    expect(
      screen.getByText('4 BR | 2.5 Bath | 1000 Sq Ft'),
    ).toBeInTheDocument();
    expect(screen.getByText('$655,000')).toBeInTheDocument();
    expect(
      screen.getByText('1989 Swift Dr #101, Denver, CO'),
    ).toBeInTheDocument();
    expect(screen.getByText('Listed: 5/23/2011')).toBeInTheDocument();
    const favoriteIcon = screen.getByTestId(
      '1-favorite-icon',
    ) as HTMLImageElement;
    expect(favoriteIcon.src).toBe('http://localhost/heart-fill.svg');
  });
});

describe('when the property is missing photos', () => {
  it('displays partial property summary details', async () => {
    render(
      <PropertyFavoritesProvider>
        <PropertyCard item={{ ...mockProperty, photos: [] }} />
      </PropertyFavoritesProvider>,
    );

    expect((screen.getByTestId('1-thumbnail') as HTMLImageElement).src).toBe(
      'http://localhost/noImages.jpeg',
    );
  });
});
