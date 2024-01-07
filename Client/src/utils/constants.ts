export const AppName = "Human Resources";
export const NavPanelsKeys = {
  Home: { key: "home", label: "Homepage", urlLink: "/" },
  Projects: {
    key: "projects",
    label: "Projects",
    urlLink: "/project",
    subMenu: [
      {
        key: "addProject",
        label: "Add New Project",
        urlLink: "/addNew",
        isActive: false
      },
      {
        key: "updateProject",
        label: "Update Project",
        urlLink: "/update",
        isActive: false
      },
      {
        key: "view",
        label: "View",
        urlLink: "/view",
        isActive: false
      }
    ]
  },
  Employees: {
    key: "employees",
    label: "Employees",
    urlLink: "/employee",
    subMenu: [
      {
        key: "addEmployee",
        label: "Onboard Employee",
        urlLink: "/onboarding",
        isActive: false
      },
      {
        key: "updateEmployee",
        label: "Update Employee",
        urlLink: "/update",
        isActive: false
      },
      {
        key: "view",
        label: "View",
        urlLink: "/view",
        isActive: false
      }
    ]
  },
  Settings: { key: "settings", label: "Settings", urlLink: "/settings" }
};

export enum ButtonCategories {
  TextButton = "TextButton",
  OutlinedButton = "OutlinedButton",
  ContainedButton = "ContainedButton"
}

export interface IButtonType {
  label: string;
  buttonIcon?: { icon: JSX.Element; position: string };
  onClick: () => void;
  color?: string;
  buttonType: string;
  style?: { color?: string };
}

export const appColors = {
  primaryActionColor: "#15C421",
  secondaryActionColor: "#089B12",
  primaryTextColor: "#080F1D",
  secondaryTextColor: "#44505F",
  disabledTextColor: "#647181",
  disabledBGColor: "#E3E5E8",
  grey1: "#8E97A4",
  grey2: "#727E8D",
  grey50: "#F4F5F6",
  grey300: "#AAB1BB",
  tagBGColor: "#E6EEFE",
  tagTextColor: "#2851A3",
  black: "#000000",
  white: "#ffffff",
  sidePanelTextColor: "#aa28aa"
};
export enum IButtonIconPosition {
  RIGHT = "RIGHT",
  LEFT = "LEFT"
}
