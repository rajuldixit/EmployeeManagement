import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { INewEmployee } from "utils/interfaces";

interface IApiResponse {
  isError: boolean;
  isSuccess: boolean;
}
const useEmployeeApis = () => {
  const [apiResponse, setApiResponse] = useState<IApiResponse>({
    isError: false,
    isSuccess: false
  });
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);
  const base_url = process.env.SERVER_URL || "http://localhost:4000/";

  const headerConfig = async () => {
    const token = await Cookies.get("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    return config;
  };

  const onboarding = async (emp: INewEmployee) => {
    const config = await headerConfig();
    setActionExecuting(true);
    try {
      const resp = await axios.post(
        `${base_url}employee/onboarding`,
        {
          employee: emp
        },
        config
      );
      setApiResponse({ isError: false, isSuccess: true });
    } catch (err) {
      setApiResponse({ isError: true, isSuccess: false });
    } finally {
      setActionExecuting(false);
    }
  };
  const updateEmployee = async (emp: any) => {
    const token = await Cookies.get("accessToken");
  };
  return { apiResponse, onboarding, updateEmployee };
};

export default useEmployeeApis;
