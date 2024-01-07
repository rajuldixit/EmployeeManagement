import { IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";

const Notification = () => {
  return (
    <IconButton>
      <Badge badgeContent={9} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default Notification;
