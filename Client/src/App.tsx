import React, { Suspense, useEffect } from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";

import { AuthUserProvider } from "context/user-context";
import AppRoutes from "AppRoutes";

function App() {
  // const { token, isLoggedIn } = useAuth(),
  //   navigate = useNavigate();

  // useEffect(() => {
  //   console.log("here again");
  //   if (token && isLoggedIn) {
  //     navigate("/login");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [token, isLoggedIn]);

  return (
    <AuthUserProvider>
      <AppRoutes />
    </AuthUserProvider>
  );
}

export default App;
