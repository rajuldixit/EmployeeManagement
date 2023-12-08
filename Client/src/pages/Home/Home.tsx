import { Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Header from "../../components/Header";
import Feeds from "../../components/Feeds";
import bgWall from "../../assets/images/bg_wallpaper.jpeg";

const Home = () => {
  useEffect(() => {
    const user = Cookies.get("user");
    console.log(user);
  }, []);
  return <Feeds />;
};

export default Home;
