import { useParams } from 'react-router';

import { useHeader } from 'domains/application/contexts/HeaderContext';
import IProperty, {
  getPropertyAddress,
} from 'domains/properties/models/IProperty';
import { useGetRequest } from 'lib/data/api';
import Spinner from 'lib/components/Spinner';
import Blankslate from 'lib/components/Blankslate';
import PropertyCard from 'domains/properties/components/PropertyCard';

export default function PropertyDetailsScreen() {
  const { id } = useParams<{ id: string }>();
  const { data: property, isLoading } = useGetRequest<IProperty>(
    `/properties/${id}`,
  );

  useHeader(property ? getPropertyAddress(property) : 'Property details');

  if (isLoading) return <Spinner centered />;
  if (!property) return <Blankslate>Property Not Found</Blankslate>;

  return <PropertyCard item={property} />;
}
