import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function StatusAlert({ message, error, openAlert, onCloseAlert }) {

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={onCloseAlert}>
        {error ? (
          <Alert onClose={onCloseAlert} severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        ) : (
          <Alert
            onClose={onCloseAlert}
            severity="success"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        )}
      </Snackbar>
    </Stack>
  );
}
