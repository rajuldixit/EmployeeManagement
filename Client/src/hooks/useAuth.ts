import React, { useState } from "react";

const useAuth = () => {
  const [token, setToken] = useState(""),
    [isLoggedIn, setLoggedIn] = useState(false);

  return { token, isLoggedIn };
};

export default useAuth;
