import React, { useEffect } from "react";
import Cookies from "js-cookie";

const Home = () => {
  useEffect(() => {
    const user = Cookies.get("user");
    console.log(user);
  }, []);
  return (
    <>
      <div>home</div>
    </>
  );
};

export default Home;
