import { render, screen } from '@testing-library/react';
import {
  FAVORITES_STORAGE_KEY,
  PropertyFavoritesProvider,
} from 'domains/properties/contexts/FavoritePropertiesContext';
import IProperty from 'domains/properties/models/IProperty';

import PropertyCard from '../PropertyCard';

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify({ 1: true }));
});

const property: IProperty = {
  property: {
    area: 1000,
    bathsFull: 2,
    bathsHalf: 1,
    bedrooms: 4,
  },
  mlsId: 1,
  address: {
    state: 'Colorado',
    country: 'United States',
    streetName: 'Swift Dr',
    city: 'Denver',
    streetNumber: 1989,
  },
  listDate: '2011-05-23T18:50:30.184391Z',
  photos: [
    'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg',
    'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home-inside-9.jpg',
  ],
  listPrice: 655000,
};

describe('when the property has all details', () => {
  test('displays all property summary details', async () => {
    render(
      <PropertyFavoritesProvider>
        <PropertyCard item={property} />
      </PropertyFavoritesProvider>,
    );

    expect((screen.getByTestId('1-thumbnail') as HTMLImageElement).src).toBe(
      property.photos[0],
    );
    expect(
      screen.getByText('4 BR | 2.5 Bath | 1000 Sq Ft'),
    ).toBeInTheDocument();
    expect(screen.getByText('$655,000')).toBeInTheDocument();
    expect(screen.getByText('1989 Swift Dr, Denver, CO')).toBeInTheDocument();
    expect(screen.getByText('Listed: 5/23/2011')).toBeInTheDocument();
    const favoriteIcon = screen.getByTestId(
      '1-favorite-icon',
    ) as HTMLImageElement;
    expect(favoriteIcon.src).toBe('http://localhost/heart-fill.svg');
  });
});

describe('when the property is missing photos', () => {
  test('displays partial property summary details', async () => {
    render(
      <PropertyFavoritesProvider>
        <PropertyCard item={{ ...property, photos: [] }} />
      </PropertyFavoritesProvider>,
    );

    expect((screen.getByTestId('1-thumbnail') as HTMLImageElement).src).toBe(
      'http://localhost/noImages.jpeg',
    );
    expect(
      screen.getByText('4 BR | 2.5 Bath | 1000 Sq Ft'),
    ).toBeInTheDocument();
    expect(screen.getByText('$655,000')).toBeInTheDocument();
    expect(screen.getByText('1989 Swift Dr, Denver, CO')).toBeInTheDocument();
    expect(screen.getByText('Listed: 5/23/2011')).toBeInTheDocument();
    const favoriteIcon = screen.getByTestId(
      '1-favorite-icon',
    ) as HTMLImageElement;
    expect(favoriteIcon.src).toBe('http://localhost/heart-fill.svg');
  });
});
