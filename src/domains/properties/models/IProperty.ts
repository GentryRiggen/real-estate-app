export default interface IProperty {
  property: {
    area: number;
    bathsFull: number;
    bathsHalf: number;
    bedrooms: number;
  };
  mlsId: number;
  address: {
    state: string;
    country: string;
    streetName: string;
    city: string;
    streetNumber: number;
  };
  listDate: string;
  photos: string[];
  listPrice: number;
}
