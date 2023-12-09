import React from "react";
import Spinner from "../assets/images/Hourglass.gif";

const Loader = () => {
  return <img src={Spinner} className="fp-loader" alt="loading" />;
};

export default Loader;
