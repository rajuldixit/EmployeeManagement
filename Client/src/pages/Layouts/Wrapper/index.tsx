import React, { ReactNode } from "react";
import bgWall from "../../../assets/images/bg_wallpaper.jpeg";
import { Container, Stack, styled } from "@mui/system";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Paper } from "@mui/material";
import SideNav from "components/SideNav/index";
import { AuthUserProvider } from "context/user-context";

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
    <>
      {/* <AppContextProvider> */}
      {/* <AuthUserProvider> */}
      <Container
        sx={{
          display: { xs: "block", sm: "flex" },
          padding: "0 !important",
          width: "100%",
          overflow: "hidden",
          margin: "0",
          height: { sm: "100vh" },
          maxWidth: "1920px !important"
        }}
      >
        <Stack
          sx={{
            width: { xs: "100%", sm: "30%", md: "28%", lg: "18%" },
            padding: "10px",
            height: { sm: "96vh" },
            boxSizing: "border-box"
          }}
        >
          <SideNav />
        </Stack>
        <Stack
          sx={{
            width: { xs: "100%", sm: "70%", md: "72%", lg: "82%" },
            padding: {
              xs: "10px",
              sm: "10px 2%",
              md: "10px 2%",
              lg: "10px 5%"
            },
            overflowY: "scroll",
            boxSizing: "border-box"
          }}
        >
          {/* <Header /> */}
          <Outlet />
        </Stack>
      </Container>
      {/* </AuthUserProvider> */}
      {/* </AppContextProvider> */}
    </>
    // <Container maxWidth="xl" sx={boxContainer}>
    //   <img
    //     style={{
    //       position: "absolute",
    //       left: "0",
    //       top: "0",
    //       width: "99.7vw",
    //       height: "99.7vh"
    //     }}
    //     src={bgWall}
    //     alt=""
    //   />
    //   <Stack sx={[glass, { position: "absolute", width: "80%" }]}>
    //     <Header />
    //   </Stack>
    //   <Stack
    //     sx={[glass, { marginTop: "60px", position: "absolute", width: "80%" }]}
    //   >
    //     <FeedsPaper variant="elevation">
    //       <Outlet />
    //     </FeedsPaper>
    //   </Stack>
    // </Container>
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
