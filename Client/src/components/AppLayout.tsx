import React, { ReactNode } from "react";
import bgWall from "../assets/images/bg_wallpaper.jpeg";
import { Container, Stack } from "@mui/system";
import Feeds from "./Feeds";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Container maxWidth="xl" sx={boxContainer}>
      <img
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "99.7vw",
          height: "99.7vh"
        }}
        src={bgWall}
        alt=""
      />
      <Stack sx={[glass, { position: "absolute", width: "80%" }]}>
        <Header />
      </Stack>
      <Stack
        sx={[glass, { marginTop: "60px", position: "absolute", width: "80%" }]}
      >
        <Outlet />
      </Stack>
    </Container>
  );
};
const boxContainer = {
  backgroundColor: "#e4e0e3",
  height: "100vh",
  padding: "20px 10% !important",
  boxSizing: "border-box"
};

const glass = {
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
  backdropFilter: "blur(10px)",
  "-webkit-backdrop-filter": "blur(10px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
};
export default AppLayout;
