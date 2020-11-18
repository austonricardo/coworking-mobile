export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ResponseSignInUser {
  message: string;
  user?: User;
  token: string;
}

export interface CurrentRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
