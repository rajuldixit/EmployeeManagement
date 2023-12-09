import React from "react";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Onboarding = React.lazy(() => import("./pages/Employee/Onboarding"));
const UpdateEmployee = React.lazy(
  () => import("./pages/Employee/UpdateEmployee")
);
const NewProject = React.lazy(() => import("./pages/Projects/NewProject"));
const UpdateProject = React.lazy(
  () => import("./pages/Projects/UpdateProject")
);
const ViewProjects = React.lazy(() => import("./pages/Projects/ViewProjects"));
const Timesheet = React.lazy(() => import("./pages/Timesheet/Timesheet"));

const routes = [
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
    path: "/onboarding",
    component: Onboarding,
    navbar: "",
    child: null
  },
  {
    enabled: true,
    path: "/updateEmployee",
    component: UpdateEmployee,
    navbar: "",
    child: null
  },
  {
    enabled: true,
    path: "/newProject",
    component: NewProject,
    navbar: "",
    child: null
  },
  {
    enabled: true,
    path: "/updateProject",
    component: UpdateProject,
    navbar: "",
    child: null
  },
  {
    enabled: true,
    path: "/viewProjects",
    component: ViewProjects,
    navbar: "",
    child: null
  },
  {
    enabled: true,
    path: "/timesheet",
    component: Timesheet,
    navbar: "",
    child: null
  }
];

export default routes.filter((route) => route.enabled);
