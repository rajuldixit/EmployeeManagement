import React, { Suspense, useEffect } from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";

import { AuthUserProvider } from "context/user-context";
import AppRoutes from "AppRoutes";

function App() {
  return (
    <AuthUserProvider>
      <AppRoutes />
    </AuthUserProvider>
  );
}

export default App;
