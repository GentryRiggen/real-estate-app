export default interface IProperty {
  property: {
    roof: string;
    cooling?: string;
    style: string;
    area: number;
    bathsFull: number;
    bathsHalf: number;
    stories: number;
    fireplaces: number;
    flooring?: string;
    heating: string;
    bathrooms?: number;
    foundation: string;
    laundryFeatures: string;
    occupantName?: string;
    ownerName?: string;
    lotDescription: string;
    pool: string;
    subType?: string;
    bedrooms: number;
    interiorFeatures: string;
    lotSize: string;
    areaSource: string;
    maintenanceExpense?: string;
    additionalRooms: string;
    exteriorFeatures: string;
    water?: string;
    view: string;
    lotSizeArea?: string;
    subdivision: string;
    construction: string;
    parking: {
      leased?: string;
      spaces: number;
      description: string;
    };
    lotSizeAreaUnits?: string;
    type: string;
    garageSpaces: number;
    bathsThreeQuarter?: string;
    accessibility: string;
    acres?: string;
    occupantType?: string;
    subTypeText?: string;
    yearBuilt: number;
  };
  mlsId: number;
  showingContactPhone?: string;
  terms: string;
  showingInstructions: string;
  office: {
    contact: {
      email: string;
      office: string;
      cell?: string;
    };
    name?: string;
    servingName?: string;
    brokerid?: string;
  };
  leaseTerm?: string;
  disclaimer: string;
  specialListingConditions?: string;
  originalListPrice?: string;
  address: {
    crossStreet: string;
    state: string;
    country: string;
    postalCode: string;
    streetName: string;
    streetNumberText: string;
    city: string;
    streetNumber: number;
    full: string;
    unit: string;
  };
  agreement: string;
  listDate: string;
  agent: {
    officeMlsId?: string;
    lastName: string;
    contact: {
      email: string;
      office: string;
      cell?: string;
    };
    address?: string;
    modified?: string;
    firstName: string;
    id: string;
  };
  modified: string;
  school: {
    middleSchool: string;
    highSchool: string;
    elementarySchool: string;
    district?: string;
  };
  photos: string[];
  listPrice: number;
  internetAddressDisplay?: string;
  listingId: string;
  mls: {
    status: string;
    area: string;
    daysOnMarket: number;
    originalEntryTimestamp?: string;
    originatingSystemName?: string;
    statusText: string;
    areaMinor?: string;
  };
  internetEntireListingDisplay?: string;
  geo: {
    county: string;
    lat: number;
    lng: number;
    marketArea: string;
    directions: string;
  };
  tax: {
    taxYear: number;
    taxAnnualAmount: number;
    id: string;
  };
  coAgent: {
    officeMlsId?: string;
    lastName?: string;
    contact: {
      email: string;
      office: string;
      cell?: string;
    };
    address?: string;
    modified?: string;
    firstName?: string;
    id: string;
  };
  sales: {
    closeDate: string;
    office: {
      contact?: string;
      name: string;
      servingName: string;
      brokerid: string;
    };
    closePrice: string;
    agent: {
      officeMlsId: string;
      lastName: string;
      contact?: string;
      address?: string;
      modified?: string;
      firstName: string;
      id: string;
    };
    contractDate?: string;
  };
  ownership?: string;
  leaseType: string;
  virtualTourUrl?: string;
  remarks: string;
  association: {
    frequency?: string;
    fee: number;
    name: string;
    amenities: string;
  };
}
