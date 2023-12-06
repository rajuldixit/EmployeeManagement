export interface IUser {
  id?: string;
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
