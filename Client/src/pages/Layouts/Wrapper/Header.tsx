import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
// import styled from "@emotion/styled";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Badge,
  Box,
  Button,
  ClickAwayListener,
  Grow,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  Toolbar,
  Typography,
  alpha
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { IUser } from "../../../utils/interfaces";
import { useNavigate } from "react-router-dom";
// import { Search } from "react-router";

const HeaderPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: 50,
  backgroundColor: "rgb(229 229 237 / 75%)",
  boxSizing: "border-box",
  border: "1px solid lightgrey"
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

const Header = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [open, setOpen] = useState(false);
  const [openEmployee, setEmployeeOpen] = useState(false);
  const [openProjects, setProjectsOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const anchorEmpRef = useRef<HTMLButtonElement>(null);
  const anchorProjectsRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleEmployeeToggle = () => {
    setEmployeeOpen((prevOpen) => !prevOpen);
  };
  const handleEmployeeClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorEmpRef.current &&
      anchorEmpRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setEmployeeOpen(false);
  };
  const handleProjectsToggle = () => {
    setProjectsOpen((prevOpen) => !prevOpen);
  };
  const handleProjectsClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorProjectsRef.current &&
      anchorProjectsRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setProjectsOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const prevEmpOpen = useRef(openEmployee);
  useEffect(() => {
    if (prevEmpOpen.current === true && openEmployee === false) {
      anchorEmpRef.current!.focus();
    }

    prevEmpOpen.current = openEmployee;
  }, [openEmployee]);

  const prevProjectOpen = useRef(openProjects);
  useEffect(() => {
    if (prevProjectOpen.current === true && openProjects === false) {
      anchorProjectsRef.current!.focus();
    }

    prevProjectOpen.current = openProjects;
  }, [openProjects]);

  const employeeAction = (
    actionType: string,
    e: Event | React.SyntheticEvent
  ) => {
    if (actionType == "ONBOARD") {
      navigate("/onboarding");
    } else if (actionType == "UPDATE") {
      navigate("/updateEmployee");
    }
    handleEmployeeClose(e);
  };

  const handleProjectsActions = (
    actionType: string,
    e: Event | React.SyntheticEvent
  ) => {
    if (actionType == "NEW") {
      navigate("/newProject");
    } else if (actionType == "UPDATE") {
      navigate("/updateProject");
    } else if (actionType == "VIEW") {
      navigate("/viewProject");
    }
    handleProjectsClose(e);
  };

  const handleMyProfileAction = (e: Event | React.SyntheticEvent) => {
    navigate("/profile");
    handleClose(e);
  };

  const handleLogout = () => {};
  const handleTimesheet = () => {
    navigate("/timesheet");
  };
  const handleHomePage = () => {
    navigate("/home");
  };

  useEffect(() => {
    console.log("header");
    const u = {
      id: "1",
      firstname: "admin",
      lastname: "admin",
      username: "admin",
      email: "admin@gmail.com",
      password: "$2b$10$J6adca0BQ4i76BsthXZ95.ymejaha/AaOaDknOY7YOSbaMHvKz2Rm",
      isAdmin: true,
      role: "ADMIN"
    };
    setUser(u);
  }, []);
  return (
    <HeaderPaper variant="elevation">
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ padding: "0 16px", boxSizing: "border-box" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button variant="text" onClick={handleHomePage}>
            Home
          </Button>
          {user?.isAdmin && (
            <div>
              <Button
                ref={anchorEmpRef}
                id="composition-button"
                aria-controls={openEmployee ? "composition-menu" : undefined}
                aria-expanded={openEmployee ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleEmployeeToggle}
              >
                Employees
              </Button>
              <Popper
                open={openEmployee}
                anchorEl={anchorEmpRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                // disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom"
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleEmployeeClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem
                            onClick={(e: Event | React.SyntheticEvent) =>
                              employeeAction("ONBOARD", e)
                            }
                          >
                            Onboarding
                          </MenuItem>
                          <MenuItem
                            onClick={(e: Event | React.SyntheticEvent) =>
                              employeeAction("UPDATE", e)
                            }
                          >
                            Update
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          )}
          <div>
            <Button
              ref={anchorProjectsRef}
              id="composition-button"
              aria-controls={openProjects ? "composition-menu" : undefined}
              aria-expanded={openProjects ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleProjectsToggle}
            >
              Projects
            </Button>
            <Popper
              open={openProjects}
              anchorEl={anchorProjectsRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              // disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom"
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleProjectsClose}>
                      <MenuList
                        autoFocusItem={openProjects}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        {user?.isAdmin && (
                          <>
                            <MenuItem
                              onClick={(e: Event | React.SyntheticEvent) =>
                                handleProjectsActions("NEW", e)
                              }
                            >
                              Create new
                            </MenuItem>
                            <MenuItem
                              onClick={(e: Event | React.SyntheticEvent) =>
                                handleProjectsActions("UPDATE", e)
                              }
                            >
                              Update
                            </MenuItem>
                          </>
                        )}
                        <MenuItem
                          onClick={(e: Event | React.SyntheticEvent) =>
                            handleProjectsActions("VIEW", e)
                          }
                        >
                          View
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
          <Button variant="text" onClick={handleTimesheet}>
            Timesheet
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <IconButton sx={{ marginRight: "16px" }}>
            <Badge badgeContent={9} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              user
              <IconButton>
                <AccountCircle />
              </IconButton>
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              // disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom"
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          onClick={(e: Event | React.SyntheticEvent) =>
                            handleMyProfileAction(e)
                          }
                        >
                          My Profile
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Box>
      </Stack>
    </HeaderPaper>
  );
};

export default Header;
