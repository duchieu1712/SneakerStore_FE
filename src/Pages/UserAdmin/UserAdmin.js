import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../../Components/DataTable/DataTable";
import ModalForm from "../../Components/ModalForm/ModalForm";
import SearchInput from "../../Components/SearchInput/SearchInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BsPlus } from "react-icons/bs";
import StatusAlert from "../../Components/StatusAlert/StatusAlert";
import {
  deleteUser,
  getUserList,
  signUp,
  updateUser,
} from "../../Redux/Actions/user";

const headCells = [
  {
    id: "id",
    format: (value) => value.toLocaleString("en-US"),
    label: "ID",
  },
  {
    id: "username",
    format: (value) => value.toLocaleString("en-US"),
    label: "User name",
  },
  {
    id: "email",
    format: (value) => value.toLocaleString("en-US"),
    label: "Email",
  },
  {
    id: "phone",
    format: (value) => value.toLocaleString("en-US"),
    label: "Phone number",
  },
  {
    id: "created_date",
    format: (value) => value.toLocaleString("en-US"),
    label: "Created date",
  },
  {
    id: "address",
    format: (value) => value.toLocaleString("en-US"),
    label: "Address",
  },
  {
    id: "user_type",
    format: (value) => {
      if (value === "0") {
        return "Customer";
      } else {
        return "Admin";
      }
    },
    label: "User type",
  },
  {
    id: "status",
    format: (value) => {
      if (value === 0) {
        return "Normal";
      } else {
        return "Shopping";
      }
    },
    label: "Status",
  },
];
export default function UserAdmin() {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [userObj, setUserObj] = useState({});
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [userDelete, setUserDelete] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    dispatch(getUserList());
    // eslint-disable-next-line
  }, []);
  const { userList, message, error } = useSelector(
    (state) => state.userReducer
  );

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const handleChange = (e) => {
    setKey(e.target.value);
  };
  const handleSearch = () => {
    console.log(key);
  };
  const handleEditSelect = (select) => {
    setUserObj(select);
    setOpen(true);
    setIsUpdate(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUserObj({});
  };
  const handleAddCategory = () => {
    setOpen(true);
    setIsUpdate(false);
  };
  const handleChangeObj = (type) => (e) => {
    setUserObj((obj) => ({ ...obj, [type]: e.target.value }));
  };
  const content = (
    <Box component="form" sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        label="User name"
        size="small"
        fullWidth
        value={userObj.username}
        onChange={handleChangeObj("username")}
      />
      <TextField
        label="Email"
        size="small"
        fullWidth
        value={userObj.email}
        onChange={handleChangeObj("email")}
      />
      <TextField
        label="Password"
        size="small"
        fullWidth
        type={"password"}
        value={userObj.password}
        onChange={handleChangeObj("password")}
      />
      <TextField
        label="Phone number"
        size="small"
        fullWidth
        value={userObj.phone}
        onChange={handleChangeObj("phone")}
      />
      <TextField
        label="Address"
        size="small"
        fullWidth
        value={userObj.address}
        onChange={handleChangeObj("address")}
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <FormControl sx={{ width: "49%" }} size="small">
          <InputLabel id="demo-simple-select-label">User type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userObj.user_type}
            onChange={handleChangeObj("user_type")}
            label="User type"
          >
            <MenuItem value={"Customer"}>Customer</MenuItem>
            <MenuItem value={"Admin"}>Admin</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "49%" }} size="small">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userObj.status}
            onChange={handleChangeObj("status")}
            label="Status"
          >
            <MenuItem value={0}>Normal</MenuItem>
            <MenuItem value={1}>Shopping</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
  const contentDelete = (
    <Box>
      Are you sure want to delete these users "{" "}
      {userDelete.map((item) => {
        return `${item} `;
      })}{" "}
      " ???
    </Box>
  );
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setUserDelete([]);
  };
  const handleDeleteSelect = (select) => {
    setUserDelete(select);
    setOpenDelete(true);
  };
  const handleDispatchDelete = () => {
    dispatch(deleteUser(userDelete));
    handleCloseDelete();
    setTimeout(handleOpenAlert, 2000);
  };
  const handleDispatch = () => {
    if (isUpdate) {
      dispatch(updateUser(userObj.id, userObj));
    } else {
      dispatch(signUp(userObj));
    }
    handleClose();
    setTimeout(handleOpenAlert, 2000);
  };
  return (
    <div>
      <div className="flex justify-between mb-2">
        <SearchInput
          onHandleChange={handleChange}
          onHandleSearch={handleSearch}
        />
        <Button
          variant="contained"
          startIcon={<BsPlus />}
          onClick={handleAddCategory}
        >
          Add user
        </Button>
      </div>

      <DataTable
        rows={userList}
        headCells={headCells}
        handleEditSelect={handleEditSelect}
        handleDeleteSelect={handleDeleteSelect}
      />
      <ModalForm
        title={"User"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
        handleDispatch={handleDispatch}
      />
      <ModalForm
        title={"User Delete"}
        open={openDelete}
        handleClose={() => handleCloseDelete()}
        formInput={contentDelete}
        handleDispatch={handleDispatchDelete}
      />
      <StatusAlert
        message={message}
        error={error}
        openAlert={openAlert}
        onCloseAlert={handleCloseAlert}
      />
    </div>
  );
}
