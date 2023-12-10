import React, { createContext, useState } from "react";
import { IUser } from "utils/interfaces";

const defaultUserDetails = {
  id: "",
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  isAdmin: false,
  role: ""
};

interface IUserTypeContext {
  user: IUser;
  isAuthenticated: boolean;
  saveUser: (user: IUser) => void;
  setIsAuthenticated: (val: boolean) => void;
}

const initialValue = {
  user: defaultUserDetails,
  isAuthenticated: false,
  saveUser: () => {},
  setIsAuthenticated: () => {}
};

export const AuthUserContext = createContext<IUserTypeContext>(initialValue);

export const AuthUserProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [user, saveUser] = useState(initialValue.user);
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialValue.isAuthenticated
  );

  return (
    <AuthUserContext.Provider
      value={{ user, isAuthenticated, saveUser, setIsAuthenticated }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};
