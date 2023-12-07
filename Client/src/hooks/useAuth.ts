import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const [token, setToken] = useState<string | undefined>(""),
    [isLoggedIn, setLoggedIn] = useState(false),
    setAuthDetails = async () => {
      const token = await Cookies.get("accessToken");
      setToken(token);
      if (token) {
        setLoggedIn(true);
      }
    };
  useEffect(() => {
    setAuthDetails();
  }, []);

  return { token, isLoggedIn };
};

export default useAuth;
