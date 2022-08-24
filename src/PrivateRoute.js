import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Element {...props} /> : <Navigate to="/signIn" />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
