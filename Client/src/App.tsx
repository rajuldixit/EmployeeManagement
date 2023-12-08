import React, { Suspense, useEffect } from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AppLayout from "./components/AppLayout";

const LazyProfilePage = React.lazy(() => import("./pages/Profile/Profile"));
const LazyOnboardingPage = React.lazy(
  () => import("./pages/Employee/Onboarding")
);
const LazyUpdateEmployeePage = React.lazy(
  () => import("./pages/Employee/UpdateEmployee")
);
const LazyNewProjectPage = React.lazy(
  () => import("./pages/Projects/NewProject")
);
const LazyUpdateProjectPage = React.lazy(
  () => import("./pages/Projects/UpdateProject")
);
const LazyViewProjectsPage = React.lazy(
  () => import("./pages/Projects/ViewProjects")
);
const LazyTimesheetPage = React.lazy(
  () => import("./pages/Timesheet/Timesheet")
);

function App() {
  const { token, isLoggedIn } = useAuth(),
    navigate = useNavigate();

  useEffect(() => {
    if (token && isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [token, isLoggedIn]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/home" element={<Home />} />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<p>Loading Profile</p>}>
              <LazyProfilePage />
            </Suspense>
          }
        />
        <Route
          path="/onboarding"
          element={
            <Suspense fallback={<p>Loading Profile</p>}>
              <LazyOnboardingPage />
            </Suspense>
          }
        />
        <Route
          path="/updateEmployee"
          element={
            <Suspense fallback={<p>Loading Profile</p>}>
              <LazyUpdateEmployeePage />
            </Suspense>
          }
        />
        <Route
          path="/newProject"
          element={
            <Suspense fallback={<p>Loading Profile</p>}>
              <LazyNewProjectPage />
            </Suspense>
          }
        />
        <Route
          path="/updateProject"
          element={
            <Suspense fallback={<p>Loading Profile</p>}>
              <LazyUpdateProjectPage />
            </Suspense>
          }
        />
        <Route
          path="/viewProjects"
          element={
            <Suspense fallback={<p>Loading Profile</p>}>
              <LazyViewProjectsPage />
            </Suspense>
          }
        />
        <Route
          path="/timesheet"
          element={
            <Suspense fallback={<p>Loading Profile</p>}>
              <LazyTimesheetPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
