import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function CheckOutRoute({ children, ...props }) {
  const { currentUser } = useSelector((state) => state.userReducer);
  if (!currentUser) {
    return <Redirect to='/auth/signIn' />;
  }
  return <Route {...props}>{children}</Route>;
}
