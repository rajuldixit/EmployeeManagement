import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import LeftPanel from "./LeftPanel";
import BottomPanel from "./BottomPanel";
import AppLogo from "./AppLogo";

const SideNav = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Stack position={"relative"}>
      <AppLogo />
      {matches ? <LeftPanel /> : <BottomPanel />}
    </Stack>
  );
};

export default SideNav;
