import IProperty from 'domains/properties/models/IProperty';
import heartFill from 'assets/heart-fill.svg';
import heartStroke from 'assets/heart-stroke.svg';
import blankImage from 'assets/noImages.jpeg';
import { format } from 'date-fns';

type Props = {
  item: IProperty;
};

export default function PropertyCard({
  item: { listPrice, listDate, photos, property, address },
}: Props) {
  const firstImage = photos[0] || blankImage;
  const topLineItems = [
    { label: 'BR', value: `${property.bedrooms}` },
    { label: 'Bath', value: `${property.bathsFull + property.bathsHalf}` },
    { label: 'Sq Ft', value: `${property.area}` },
  ]
    .filter((item) => item.value.length)
    .map((item) => `${item.value} ${item.label}`)
    .join(' | ');
  const fullAddress = [
    address.streetName,
    address.streetName,
    address.city,
    address.country,
  ]
    .filter((item) => item.length)
    .join(', ');

  const isFavorited = true;

  return (
    <div className="max-w-xs mx-auto text-base relative">
      <img
        src={firstImage}
        alt={`Property - ${fullAddress}`}
        className="w-full max-h-72 mb-4 overflow-hidden rounded"
      />
      <div className="absolute top-2 right-2">
        <img
          src={isFavorited ? heartFill : heartStroke}
          className="h-8 w-8"
          alt="favorite icon"
        />
      </div>

      <p data-test="specs" className="text-xl font-semibold mb-3 leading-5">
        {topLineItems}
      </p>
      <p data-test="price" className="text-2xl font-bold leading-6 mb-3">
        ${listPrice.toLocaleString()}
      </p>
      <p data-test="address" className="text-sm.5 mb-2">
        {fullAddress}
      </p>
      <p data-test="list-date" className="text-sm text-base-light">
        Listed: {format(Date.parse(listDate), 'M/d/yyyy')}
      </p>
    </div>
  );
}
