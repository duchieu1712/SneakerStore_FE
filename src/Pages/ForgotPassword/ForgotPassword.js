import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { RiLockPasswordLine } from "react-icons/ri";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../Redux/Actions/user";
import { Navigate, NavLink } from "react-router-dom";
import StatusAlert from "../../Components/StatusAlert/StatusAlert";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <NavLink to={"/"}>Your Website</NavLink> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const { currentUser, error, message } = useSelector(
    (state) => state.userReducer
  );
  const [openAlert, setOpenAlert] = useState(false);

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      forgotPassword({
        email: data.get("email"),
        newPassword: data.get("newPassword"),
        confirmPassword: data.get("confirmPassword")
      })
    );
    setTimeout(handleOpenAlert, 2000);
  };
  if (currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <RiLockPasswordLine />
          </Avatar>
          <Typography component="h1" variant="h5">
            Set new password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              name="newPassword"
              label="New password"
              id="newPassword"
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              name="confirmPassword"
              label="Confirm password"
              id="confirmPassword"
              size="small"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <div className="text-right">
              <NavLink to="/auth/signIn" className="text-xs">
                Transfer to sign in ?
              </NavLink>
            </div>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <StatusAlert
        message={message}
        error={error}
        openAlert={openAlert}
        onCloseAlert={handleCloseAlert}
      />
    </ThemeProvider>
  );
}
