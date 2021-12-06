import React, { useContext } from 'react';
import { format } from 'date-fns';

import IProperty, {
  getPropertyAddress,
} from 'domains/properties/models/IProperty';
import heartFill from 'assets/heart-fill.svg';
import heartStroke from 'assets/heart-stroke.svg';
import { PropertyFavoritesContext } from 'domains/properties/contexts/FavoritePropertiesContext';
import blankImage from 'assets/noImages.jpeg';
import { Link } from 'react-router-dom';
import { PROPERTIES_LIST_ROUTE } from 'domains/application/constants/routes';

type Props = {
  item: IProperty;
};

export default function PropertyCard({ item }: Props) {
  const { listPrice, listDate, photos, property, mlsId } = item;
  const firstImage = photos[0] || blankImage;
  const topLineItems = [
    { label: 'BR', value: `${property.bedrooms}` },
    { label: 'Bath', value: `${property.bathsFull + property.bathsHalf / 2}` },
    { label: 'Sq Ft', value: `${property.area}` },
  ]
    .filter((item) => item.value.length)
    .map((item) => `${item.value} ${item.label}`)
    .join(' | ');
  const fullAddress = getPropertyAddress(item);

  const { favorites, toggleFavorite } = useContext(PropertyFavoritesContext);
  const isFavorited = !!favorites[mlsId];

  const onFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleFavorite(mlsId);
  };

  return (
    <Link to={`${PROPERTIES_LIST_ROUTE}${mlsId}`}>
      <div
        className="max-w-xs mx-auto text-foreground relative"
        data-testid={`${mlsId}-property-card`}
      >
        <img
          src={firstImage}
          alt={`Property - ${fullAddress}`}
          className="w-full max-h-72 mb-4 overflow-hidden rounded"
          data-testid={`${mlsId}-thumbnail`}
        />
        <button
          className="absolute top-2 right-2 rounded-lg transform transition-transform hover:scale-110 hover:shadow-lg hover:bg-white hover:bg-opacity-10"
          onClick={onFavoriteClick}
          type="button"
          data-testid={`${mlsId}-favorite-btn`}
        >
          <img
            src={isFavorited ? heartFill : heartStroke}
            className="h-8 w-8"
            alt="favorite icon"
            data-testid={`${mlsId}-favorite-icon`}
          />
        </button>

        <p
          data-testid={`${mlsId}-specs`}
          className="text-xl font-semibold mb-3 leading-5"
        >
          {topLineItems}
        </p>
        <p
          data-testid={`${mlsId}-price`}
          className="text-2xl font-bold leading-6 mb-3"
        >
          ${listPrice.toLocaleString()}
        </p>
        <p data-testid={`${mlsId}-address`} className="text-sm.5 mb-2">
          {fullAddress}
        </p>
        <p
          data-testid={`${mlsId}-list-date`}
          className="text-sm text-foreground-light"
        >
          Listed: {format(Date.parse(listDate), 'M/d/yyyy')}
        </p>
      </div>
    </Link>
  );
}
