import React from "react";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Timesheet = React.lazy(() => import("./pages/Timesheet/Timesheet"));
const Settings = React.lazy(() => import("./pages/Settings/index"));

const Employee = React.lazy(() => import("./pages/Employee/index"));
const Onboarding = React.lazy(() => import("./pages/Employee/Onboarding"));
const ViewEmployee = React.lazy(() => import("./pages/Employee/ViewEmployees"));
const UpdateEmployee = React.lazy(
  () => import("./pages/Employee/UpdateEmployee")
);

const Project = React.lazy(() => import("./pages/Projects/index"));
const NewProject = React.lazy(() => import("./pages/Projects/NewProject"));
const UpdateProject = React.lazy(
  () => import("./pages/Projects/UpdateProject")
);
const ViewProjects = React.lazy(() => import("./pages/Projects/ViewProjects"));

const lazyRoutes = [
  {
    enabled: true,
    path: "/home",
    component: Home,
    navbar: "",
    child: null
  },
  {
    enabled: true,
    path: "/profile",
    component: Profile,
    navbar: "",
    child: null
  },
  {
    enabled: true,
    path: "/timesheet",
    component: Timesheet,
    navbar: "",
    child: null
  },
  {
    enabled: true,
    path: "/settings",
    component: Settings,
    navbar: "",
    child: null
  },
  {
    enabled: true,
    path: "/employee",
    component: Employee,
    navbar: "",
    child: [
      {
        enabled: true,
        path: "onboarding",
        component: Onboarding,
        navbar: "",
        child: null
      },
      {
        enabled: true,
        path: "update",
        component: UpdateEmployee,
        navbar: "",
        child: null
      },
      {
        enabled: true,
        path: "view",
        component: ViewEmployee,
        navbar: "",
        child: null
      }
    ]
  },
  {
    enabled: true,
    path: "/project",
    component: Project,
    navbar: "",
    child: [
      {
        enabled: true,
        path: "addNew",
        component: NewProject,
        navbar: "",
        child: null
      },
      {
        enabled: true,
        path: "update",
        component: UpdateProject,
        navbar: "",
        child: null
      },
      {
        enabled: true,
        path: "view",
        component: ViewProjects,
        navbar: "",
        child: null
      }
    ]
  }
];

export default lazyRoutes.filter((route) => route.enabled);
