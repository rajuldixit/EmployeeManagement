export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  role: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface INewEmployee {
  firstname: string;
  lastname: string;
  email: string;
  userType: string;
  gender: string;
  city: string;
  country: string;
  postcode: string;
  street: string;
  dob: Date;
  countryCode: string;
  phoneNumber: string;
  role: string;
  jobType: string;
}
