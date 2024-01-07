import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";

const Employee = () => {
  return (
    <>
      <Stack>
        <Outlet />
      </Stack>
    </>
  );
};

export default Employee;
