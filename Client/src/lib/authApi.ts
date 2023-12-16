import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { IUser, IUserLogin } from "../utils/interfaces";
import Cookies from "js-cookie";

const useAuthApi = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);
  const base_url = process.env.SERVER_URL || "http://localhost:4000/";

  const getUser = async (user: IUserLogin) => {
    setActionExecuting(true);
    try {
      const resp = await axios.post(`${base_url}api/login`, {
        email: user.email,
        password: user.password
      });
      Cookies.set("accessToken", resp.data.accessToken, {
        expires: 7
      });
      Cookies.set("refreshToken", resp.data.refreshToken, {
        expires: 7
      });
      setUser(resp.data.user);
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };
  const logoutUser = async () => {
    const token = await Cookies.get("accessToken");
    setActionExecuting(true);
    try {
      await axios
        .post(`${base_url}api/logout`, {
          token: token
        })
        .then((resp) => {
          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          setUser(null);
        });
    } catch (err) {
      const error = err as AxiosError;
      const errorData = error?.response?.data || "error";
      setErrorMessage(errorData as string);
    } finally {
      setActionExecuting(false);
    }
  };

  return {
    user,
    errorMessage,
    getUser,
    logoutUser
  };
};

export default useAuthApi;
