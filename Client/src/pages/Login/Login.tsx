import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IUserLogin } from "../../utils/interfaces";
import useAuthApi from "../../lib/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

const FormPaper = styled(Paper)(({ theme }) => ({
  width: 520,
  height: 400,
  backgroundColor: "rgba(255, 255, 255, 0.13)",
  padding: 10,
  boxSizing: "border-box",
  border: "1px solid lightgrey"
}));

const Login = () => {
  const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
    } = useForm<IUserLogin>(),
    { getUser, user, errorMessage } = useAuthApi(),
    onSubmit = handleSubmit(async (data: IUserLogin) => {
      await getUser({ email: data.email, password: data.password });
    }),
    navigate = useNavigate();

  useEffect(() => {
    if (!!user) {
      navigate("/home");
    }
  }, [user, errorMessage]);

  return (
    <Container maxWidth="xl" sx={boxContainer}>
      <FormPaper variant="elevation">
        <Typography variant="h5" textAlign={"center"}>
          Login
        </Typography>
        <form onSubmit={onSubmit}>
          <Stack p={2}>
            <TextField
              required
              type="email"
              label="Email"
              defaultValue="Email"
              {...register("email")}
            />
          </Stack>
          <Stack p={2}>
            <TextField
              required
              type="password"
              label="Password"
              defaultValue="Password"
              {...register("password")}
            />
          </Stack>
          <Stack p={2}>
            <Button type="submit" variant="contained">
              Sign in
            </Button>
          </Stack>
          <Stack p={2}>
            <Button type="button" variant="text">
              Forgot password ?
            </Button>
          </Stack>
          {errorMessage && (
            <Typography textAlign={"center"} color={"red"}>
              {errorMessage}
            </Typography>
          )}
        </form>
      </FormPaper>
    </Container>
  );
};

const boxContainer = {
  backgroundColor: "#e4e0e3",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default Login;
