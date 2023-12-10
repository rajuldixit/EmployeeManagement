import React, { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { AuthUserContext } from "context/user-context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useContext(AuthUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);
  return (
    <>
      <div>home</div>
    </>
  );
};

export default Home;
