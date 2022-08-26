import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const { currentUser } = useSelector((state) => state.userReducer);
  if (currentUser) {
    if (currentUser.user_type === "Admin") {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  }
  return <Navigate to="/auth/signIn" />;
}
