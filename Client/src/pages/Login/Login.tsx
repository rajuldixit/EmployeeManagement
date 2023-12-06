import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IUserLogin } from "../../utils/interfaces";
import useAuthApi from "../../lib/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

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
    console.log("user ::", user);
    if (!!user) {
      navigate("/home");
    }
  }, [user, errorMessage]);
  return (
    <form onSubmit={onSubmit}>
      <label>Email</label>
      <input {...register("email")} />
      <label>Password</label>
      <input {...register("password")} />
      <button type="submit">SetValue</button>
    </form>
  );
};

export default Login;
