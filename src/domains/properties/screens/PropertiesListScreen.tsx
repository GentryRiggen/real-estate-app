import { useHeader } from 'domains/application/contexts/HeaderContext';
import PropertyCard from 'domains/properties/components/PropertyCard';
import GridList from 'lib/components/GridList';

export default function PropertiesListScreen() {
  useHeader('Property List');

  return <GridList url="/properties" Component={PropertyCard} />;
}
