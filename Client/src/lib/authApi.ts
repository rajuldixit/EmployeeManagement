import axios from "axios";
import React, { useState } from "react";
import { IUser, IUserLogin } from "../utils/interfaces";

const useAuthApi = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);
  const base_url = process.env.SERVER_URL || "http://localhost:4000/";

  const getUser = async (user: IUserLogin) => {
    setActionExecuting(true);
    try {
      const resp = await axios.post(`${base_url}login`, {
        email: user.email,
        password: user.password
      });
      setUser(resp.data);
    } catch (err) {
      setErrorMessage("Error in fetch");
    } finally {
      setActionExecuting(false);
    }
  };
  return {
    user,
    errorMessage,
    getUser
  };
};

export default useAuthApi;
