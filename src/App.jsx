import React from "react";
import Authentication from "./Authentication";
import { Unauthentication } from "./UnAuthentication";

export const App = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return <Authentication />;
  } else {
    return <Unauthentication />;
  }
};
