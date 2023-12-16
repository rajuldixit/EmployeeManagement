import React, { useContext, useEffect } from "react";
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
import { AuthUserContext } from "context/user-context";

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
      formState: { errors, isDirty, isValid }
    } = useForm<IUserLogin>(),
    { getUser, user, errorMessage } = useAuthApi(),
    { setIsAuthenticated, saveUser } = useContext(AuthUserContext),
    onSubmit = handleSubmit(async (data: IUserLogin) => {
      await getUser({ email: data.email, password: data.password });
    }),
    navigate = useNavigate();

  useEffect(() => {
    if (!!user) {
      setIsAuthenticated(true);
      saveUser(user);
      navigate("/");
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
              data-cy="email-field"
              required
              type="email"
              label="Email"
              defaultValue=""
              {...register("email")}
            />
          </Stack>
          <Stack p={2}>
            <TextField
              required
              data-cy="password-field"
              type="password"
              label="Password"
              defaultValue=""
              {...register("password")}
            />
          </Stack>
          <Stack p={2}>
            <Button
              type="submit"
              variant="contained"
              data-cy="sign-in"
              disabled={!isDirty || !isValid}
            >
              Sign in
            </Button>
          </Stack>
          <Stack p={2}>
            <Button type="button" variant="text">
              Forgot password ?
            </Button>
          </Stack>
          {errorMessage && (
            <Typography
              textAlign={"center"}
              color={"red"}
              data-cy="error-message"
            >
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
