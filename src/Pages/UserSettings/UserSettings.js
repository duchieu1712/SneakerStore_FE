import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FaRegSave, FaExchangeAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../Redux/Actions/user";

export default function UserSettings() {
  const { user, currentUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(currentUser.id));
    // eslint-disable-next-line
  }, []);

  const [userObj, setUserObj] = useState({});
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative z-10  items-baseline justify-between pt-10 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Settings
        </h1>
        <div className="d-block md:flex">
          <div className="w-full md:w-1/2 px-5">
            <h2 className="py-5 text-xl font-medium">Profile setting</h2>
            <Box component="form" sx={{ "& > :not(style)": { my: 1 } }}>
              <TextField
                label="User name"
                size="small"
                fullWidth
                defaultValue={user.username}
                // value={user.username}
                // onChange={handleChangeObj("username")}
              />
              <TextField
                label="Email"
                size="small"
                fullWidth
                // defaultValue={user.email}
                value={userObj.email}
                // onChange={handleChangeObj("email")}
              />
              <TextField
                label="Password"
                size="small"
                fullWidth
                // defaultValue={user.password}
                type={"password"}
                value={userObj.password}
                // onChange={handleChangeObj("password")}
              />
              <TextField
                label="Phone number"
                size="small"
                fullWidth
                // defaultValue={user.phone}
                value={userObj.phone}
                // onChange={handleChangeObj("phone")}
              />
              <TextField
                label="Address"
                size="small"
                fullWidth
                // defaultValue={user.address}
                value={userObj.address}
                // onChange={handleChangeObj("address")}
              />
            </Box>
            <div className="w-full text-right">
              <Button variant="contained" startIcon={<FaRegSave />}>
                Save profile
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-6">
            <h2 className="py-5 text-xl font-medium">Password setting</h2>
            <Box sx={{ "& > :not(style)": { my: 1 } }}>
              <TextField
                label="User name"
                size="small"
                fullWidth
                value={userObj.username}
                // onChange={handleChangeObj("username")}
              />
              <TextField
                label="Email"
                size="small"
                fullWidth
                value={userObj.email}
                // onChange={handleChangeObj("email")}
              />
              <TextField
                label="Password"
                size="small"
                fullWidth
                type={"password"}
                value={userObj.password}
                // onChange={handleChangeObj("password")}
              />
            </Box>
            <div className="w-full text-right">
              <Button variant="contained" startIcon={<FaExchangeAlt />}>
                Save password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
