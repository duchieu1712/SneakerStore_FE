import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { FcCancel } from "react-icons/fc";
import { FaRegSave } from "react-icons/fa";



export default function ModalForm({ open, handleClose, formInput, title, handleDispatch }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {title}
        </DialogTitle>
        <Divider></Divider>
        <DialogContent>{formInput}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" variant="outlined" startIcon={<FcCancel/>}>
            Cancel
          </Button>
          <Button onClick={handleDispatch} variant="outlined" startIcon={<FaRegSave/>}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
