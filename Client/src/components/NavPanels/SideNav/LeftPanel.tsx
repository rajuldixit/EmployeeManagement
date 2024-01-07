import { Collapse, Paper, Stack, styled } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import {
  ButtonCategories,
  IButtonIconPosition,
  NavPanelsKeys,
  appColors
} from "utils/constants";
import CustomButton from "components/Buttons/CustomButton";
import { useNavigate } from "react-router-dom";

const LeftNavPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#F4F5F6",
  boxSizing: "border-box",
  padding: "20px 16px",
  marginTop: "8px",
  height: "80vh",
  // position: "relative",
  [theme.breakpoints.between("sm", "md")]: {
    height: "95vh"
  }
}));
interface SubMenu {
  key: string;
  label: string;
  isActive: boolean;
  urlLink: string;
}
interface INavItem {
  key: string;
  title: string;
  icon: any;
  style?: { position: string; bottom: string };
  isActive: boolean;
  subMenu?: Array<SubMenu>;
  urlLink: string;
}
const defaultNavItems: INavItem[] = [
  {
    key: NavPanelsKeys.Home.key,
    title: NavPanelsKeys.Home.label,
    icon: HomeIcon,
    isActive: true,
    urlLink: NavPanelsKeys.Home.urlLink
  },
  {
    key: NavPanelsKeys.Projects.key,
    title: NavPanelsKeys.Projects.label,
    icon: AutoStoriesIcon,
    isActive: false,
    subMenu: NavPanelsKeys.Projects.subMenu,
    urlLink: NavPanelsKeys.Projects.urlLink
  },
  {
    key: NavPanelsKeys.Employees.key,
    title: NavPanelsKeys.Employees.label,
    icon: PeopleIcon,
    isActive: false,
    subMenu: NavPanelsKeys.Employees.subMenu,
    urlLink: NavPanelsKeys.Employees.urlLink
  },
  {
    key: NavPanelsKeys.Settings.key,
    title: NavPanelsKeys.Settings.label,
    icon: SettingsIcon,
    style: {
      position: "absolute",
      bottom: "12px"
    },
    isActive: false,
    urlLink: NavPanelsKeys.Settings.urlLink
  }
];

const LeftPanel = () => {
  const [navItems, setNavItems] = useState<INavItem[]>(defaultNavItems);
  const [openProject, setOpenProject] = useState(false);
  const [openEmployee, setOpenEmployee] = useState(false);
  const navigate = useNavigate();

  const onSelectNavOption = (
    key: string,
    parentUrl?: string,
    childUrl?: string
  ) => {
    console.log(key);
    updateActiveItem(key);
    console.log(`${parentUrl}${childUrl}`);
    if (!!parentUrl && !!childUrl) {
      navigate(`${parentUrl}${childUrl}`);
    }
  };
  const updateActiveItem = (key: string) => {
    setNavItems((prev) => {
      return prev.filter((item) => {
        if (item.key == key) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return item;
      });
    });
  };
  const handleOpen = (key: string, urllink?: string) => {
    updateActiveItem(key);
    if (key == NavPanelsKeys.Employees.key) setOpenEmployee(!openEmployee);
    else if (key == NavPanelsKeys.Projects.key) setOpenProject(!openProject);
    navigate(`${urllink}`);
  };
  return (
    <LeftNavPaper>
      {navItems.map((item) => (
        <>
          <Stack
            onClick={() => handleOpen(item.key, item.urlLink)}
            component={"div"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            key={item.key}
            sx={{
              position: item.style?.position || "relative",
              bottom: item.style?.bottom || "",
              cursor: "pointer"
            }}
          >
            <CustomButton
              key={item.key}
              label={item.title}
              onClick={() => onSelectNavOption(item.key)}
              style={{
                color: item.isActive
                  ? appColors.sidePanelTextColor
                  : appColors.grey2
              }}
              buttonIcon={{
                icon: <item.icon />,
                position: IButtonIconPosition.LEFT
              }}
              buttonType={ButtonCategories.TextButton}
            />
            {item.subMenu &&
              item.subMenu.length > 0 &&
              (item.key == NavPanelsKeys.Employees.key ? (
                openEmployee ? (
                  <ExpandLess
                    style={{
                      color: appColors.sidePanelTextColor
                    }}
                  />
                ) : (
                  <ExpandMore
                    style={{
                      color: appColors.grey2
                    }}
                  />
                )
              ) : "" || item.key == NavPanelsKeys.Projects.key ? (
                openProject ? (
                  <ExpandLess
                    style={{
                      color: appColors.sidePanelTextColor
                    }}
                  />
                ) : (
                  <ExpandMore
                    style={{
                      color: appColors.grey2
                    }}
                  />
                )
              ) : (
                ""
              ))}
          </Stack>

          <Collapse in={openEmployee} timeout="auto" unmountOnExit>
            {item.subMenu &&
              item.subMenu.length > 0 &&
              item.key == NavPanelsKeys.Employees.key &&
              item.subMenu.map((menu: SubMenu) => (
                <Stack>
                  <CustomButton
                    key={menu.key}
                    label={menu.label}
                    onClick={() =>
                      onSelectNavOption(menu.key, item.urlLink, menu.urlLink)
                    }
                    style={{
                      color: appColors.grey2
                    }}
                    buttonType={ButtonCategories.TextButton}
                  />
                </Stack>
              ))}
          </Collapse>
          <Collapse in={openProject} timeout="auto" unmountOnExit>
            {item.subMenu &&
              item.subMenu.length > 0 &&
              item.key == NavPanelsKeys.Projects.key &&
              item.subMenu.map((menu: SubMenu) => (
                <Stack>
                  <CustomButton
                    key={menu.key}
                    label={menu.label}
                    onClick={() =>
                      onSelectNavOption(menu.key, item.urlLink, menu.urlLink)
                    }
                    style={{
                      color: appColors.grey2
                    }}
                    buttonType={ButtonCategories.TextButton}
                  />
                </Stack>
              ))}
          </Collapse>
        </>
      ))}
    </LeftNavPaper>
  );
};

export default LeftPanel;
