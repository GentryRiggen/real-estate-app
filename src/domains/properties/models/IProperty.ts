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
    city: string;
    full: string;
  };
  listDate: string;
  photos: string[];
  listPrice: number;
}

export const mockProperty: IProperty = {
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
    full: '1989 Swift Dr #101',
    city: 'Denver',
  },
  listDate: '2011-05-23T18:50:30.184391Z',
  photos: [
    'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg',
    'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home-inside-9.jpg',
  ],
  listPrice: 655000,
};
