import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const [token, setToken] = useState<string | undefined>(""),
    setAuthDetails = async () => {
      const token = await Cookies.get("accessToken");
      setToken(token);
    };
  useEffect(() => {
    setAuthDetails();
  }, []);

  return { token };
};

export default useAuth;
