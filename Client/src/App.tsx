import React, { Suspense, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Login from "./pages/Login/Login";
import routes from "routes";
import Home from "pages/Home/Home";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import "./App.css";
import useAuth from "./hooks/useAuth";
import CustomError from "components/CustomError";
import LayoutWrapper from "pages/Layouts/Wrapper";
import Loader from "components/loader";

function App() {
  const { token, isLoggedIn } = useAuth(),
    navigate = useNavigate();

  useEffect(() => {
    console.log("here again");
    if (token && isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/login");
    }
  }, [token, isLoggedIn]);

  return (
    <>
      <ErrorBoundary fallback={<CustomError />}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<LayoutWrapper />}>
              <Route path="/home" element={<Home />} />
              {routes &&
                routes.map((route) => (
                  <Route
                    path={route.path}
                    element={
                      <Suspense fallback={<Loader />}>
                        <route.component />
                      </Suspense>
                    }
                    key={route.path}
                  />
                ))}
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
