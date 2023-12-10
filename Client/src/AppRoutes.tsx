import CustomError from "components/CustomError";
import Loader from "components/loader";
import lazyRoutes from "lazyRoutes";
import Home from "pages/Home/Home";
import LayoutWrapper from "pages/Layouts/Wrapper";
import Login from "pages/Login/Login";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <ErrorBoundary fallback={<CustomError />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<LayoutWrapper />}>
            <Route path="/" element={<Home />} />
            {lazyRoutes &&
              lazyRoutes.map((route) => (
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
  );
};

export default AppRoutes;
