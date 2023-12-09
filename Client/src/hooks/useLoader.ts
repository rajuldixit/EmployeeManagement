import React, { useState } from "react";
import IsLoadingHOC from "../components/loader";
import Loader from "./../components/loader";

const useLoader = () => {
  const [loading, setLoading] = useState(false);

  return;
  //   [
  //     loading ? <Loader /> : null,
  //     () => setLoading(true), //Show loader
  //     () => setLoading(false) //Hide Loader
  //   ];
};

export default useLoader;
