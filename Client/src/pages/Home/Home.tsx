import React, { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { AuthUserContext } from "context/user-context";
import { useNavigate } from "react-router-dom";
import { Typography, Container } from "@mui/material";

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
      <Typography textAlign={"center"} variant="h5">
        Home Page
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          height: "100%"
        }}
      >
        some data
      </Container>
    </>
  );
};

export default Home;
