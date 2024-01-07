import { Stack } from "@mui/material";
import React from "react";
import Notification from "./Notification";
import SearchBar from "./SearchBar/index";

const HeaderPanel = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={"end"}>
      <SearchBar />
      <Notification />
    </Stack>
  );
};

export default HeaderPanel;
