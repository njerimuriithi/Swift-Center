import React from "react";
import { useAuth } from "./pages/authentication/auth-forms/auth-context";
import { Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
  const { currentUser } = useAuth();

  // if (!currentUser) {
  //   return <Navigate to="/login" />;
  // }

  // return <Element {...rest} />;

  return (
    <>{!currentUser ? <Navigate to={"/login"} /> : <>{props.element}</>}</>
  );
}
