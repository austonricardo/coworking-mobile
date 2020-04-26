export interface Company {
  _id: string;
  email: string;
  name: string;
  linkedin: string;
  logo: string;
  street: string;
  number: string;
  complement: string;
  phone: string;
  location: Location;
  techs: string[];
  spots: Spots[];
}

export interface Spots {
  _id: string;
  image: string;
  price: string;
  company: string;
}

export interface Location {
  _id: string;
  coordinates: number[];
  type: string;
}

export interface ResponseCompaniesByLocation {
  success: boolean;
  companies: Company[];
}