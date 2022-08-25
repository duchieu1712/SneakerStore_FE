import React from "react";
import { Outlet } from "react-router-dom";
import authImg from "../../Assets/images/Photo1.png";

const AuthLayout = (props) => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img src={authImg} alt="" className="block w-full h-screen"/>
      </div>
      <div className="w-1/2"><Outlet/></div>
    </div>
  );
};

export default AuthLayout;
