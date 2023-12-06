import React, { Suspense, useEffect } from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

const LazyProfilePage = React.lazy(() => import("./pages/Profile/Profile"));

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
      <Route path="/home" element={<Home />} />
      <Route
        path="/profile"
        element={
          <Suspense fallback={<p>Loading Profile</p>}>
            <LazyProfilePage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
