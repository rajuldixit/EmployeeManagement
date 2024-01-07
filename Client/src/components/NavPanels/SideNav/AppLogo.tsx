import { Stack, Typography } from "@mui/material";
import React from "react";
import { AppName } from "utils/constants";

const AppLogo = () => {
  return (
    <Stack
      sx={{
        background: "#d986d9",
        borderRadius: "8px",
        color: "#fff",
        padding: "44px 10px"
      }}
    >
      <Typography textAlign={"center"}>{AppName}</Typography>
    </Stack>
  );
};

export default AppLogo;
