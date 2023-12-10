import React, { ReactNode } from "react";
import bgWall from "../../../assets/images/bg_wallpaper.jpeg";
import { Container, Stack, styled } from "@mui/system";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Paper } from "@mui/material";

const FeedsPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "80vh",
  backgroundColor: "rgb(254 254 255 / 75%)",
  padding: 10,
  boxSizing: "border-box",
  border: "1px solid lightgrey"
}));

const LayoutWrapper = () => {
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
        <FeedsPaper variant="elevation">
          <Outlet />
        </FeedsPaper>
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
export default LayoutWrapper;
