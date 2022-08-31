import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function AdminRoute({ children, ...props }) {
  const { currentUser } = useSelector((state) => state.userReducer);
  // if (currentUser) {
  //   if (currentUser.user_type === "Admin") {
  //     return children;
  //   } else {
  //     return <Navigate to="/" />;
  //   }
  // }
  if (!currentUser) {
    return <Redirect to={`/auth/signIn?redirectTo=${props.path}`} />;
  }
  if (currentUser.user_type !== "Admin") {
    return <Redirect to="/" />;
  }
  return <Route {...props}>{children}</Route>;
}
