import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";

const FeedsPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "80vh",
  backgroundColor: "rgb(179 179 205 / 75%)",
  padding: 10,
  boxSizing: "border-box",
  border: "1px solid lightgrey"
}));

const Feeds = () => {
  return <FeedsPaper variant="elevation"></FeedsPaper>;
};

export default Feeds;
