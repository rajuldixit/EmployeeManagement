import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IUserLogin } from "../../utils/interfaces";
import useAuthApi from "../../lib/authApi";

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
    });

  useEffect(() => {
    console.log("user ::", user);
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
