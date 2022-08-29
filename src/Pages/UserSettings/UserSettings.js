import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FaRegSave, FaExchangeAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, getUserById, updateUser } from "../../Redux/Actions/user";
import FormControl from "@mui/material/FormControl";
import StatusAlert from "../../Components/StatusAlert/StatusAlert";

export default function UserSettings() {
  const { user, currentUser, loading, message, error } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();
  const [userObj, setUserObj] = useState({});
  const [passwordObj, setPasswordObj] = useState({});
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    dispatch(getUserById(currentUser.id));
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setUserObj(user);
    // eslint-disable-next-line
  }, [loading]);

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const handleUpdate = () => {
    dispatch(updateUser(userObj.id, userObj));
    setTimeout(handleOpenAlert, 2000);
  };
  const handleChangeObj = (type) => (e) => {
    setUserObj({ ...userObj, [type]: e.target.value });
  };
  const handleChangePasswordObj = (type) => (e) => {
    setPasswordObj({ ...passwordObj, [type]: e.target.value });
  };
  const handleUpdatePassword = () => {
    dispatch(changePassword(user.id, passwordObj))
    setTimeout(handleOpenAlert, 2000);
  }

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
              <FormControl fullWidth>
                <label className="text-base font-medium">User name</label>
                <TextField
                  size="small"
                  value={userObj.username}
                  onChange={handleChangeObj("username")}
                />
              </FormControl>
              <FormControl fullWidth>
                <label className="text-base font-medium">Email</label>
                <TextField
                  size="small"
                  value={userObj.email}
                  onChange={handleChangeObj("email")}
                />
              </FormControl>
              <FormControl fullWidth>
                <label className="text-base font-medium">Phone number</label>
                <TextField
                  size="small"
                  value={userObj.phone}
                  onChange={handleChangeObj("phone")}
                />
              </FormControl>
              <FormControl fullWidth>
                <label className="text-base font-medium">Address</label>
                <TextField
                  size="small"
                  value={userObj.address}
                  onChange={handleChangeObj("address")}
                />
              </FormControl>
            </Box>
            <div className="w-full text-right">
              <Button
                variant="contained"
                startIcon={<FaRegSave />}
                onClick={handleUpdate}
              >
                Save profile
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-6">
            <h2 className="py-5 text-xl font-medium">Password setting</h2>
            <Box sx={{ "& > :not(style)": { my: 1 } }}>
              <FormControl fullWidth>
                <label className="text-base font-medium">
                  Current password
                </label>
                <TextField
                  size="small"
                  type="password"
                  value={passwordObj.oldPassword}
                  onChange={handleChangePasswordObj("oldPassword")}
                />
              </FormControl>
              <FormControl fullWidth>
                <label className="text-base font-medium">New password</label>
                <TextField
                  size="small"
                  type="password"
                  value={passwordObj.newPassword}
                  onChange={handleChangePasswordObj("newPassword")}
                />
              </FormControl>
              <FormControl fullWidth>
                <label className="text-base font-medium">
                  Confirm password
                </label>
                <TextField
                  size="small"
                  type="password"
                  value={passwordObj.confirmPassword}
                  onChange={handleChangePasswordObj("confirmPassword")}
                />
              </FormControl>
            </Box>
            <div className="w-full text-right">
              <Button variant="contained" startIcon={<FaExchangeAlt />} onClick={handleUpdatePassword}>
                Save password
              </Button>
            </div>
          </div>
        </div>
      </div>
      <StatusAlert
        message={message}
        error={error}
        openAlert={openAlert}
        onCloseAlert={handleCloseAlert}
      />
    </main>
  );
}
