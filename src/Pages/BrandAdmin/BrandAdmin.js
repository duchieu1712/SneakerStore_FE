import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../../Components/DataTable/DataTable";
import ModalForm from "../../Components/ModalForm/ModalForm";
import SearchInput from "../../Components/SearchInput/SearchInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { BsPlus } from "react-icons/bs";
import StatusAlert from "../../Components/StatusAlert/StatusAlert";
import {
  addBrand,
  deleteBrand,
  getBrands,
  updateBrand,
} from "../../Redux/Actions/brand";

const headCells = [
  {
    id: "id",
    format: (value) => value.toLocaleString("en-US"),
    label: "ID",
  },
  {
    id: "name",
    format: (value) => value.toLocaleString("en-US"),
    label: "Brand",
  },
  {
    id: "image",
    format: (value) => value.toLocaleString("en-US"),
    label: "Image",
  },
  {
    id: "descrip",
    format: (value) => value.toLocaleString("en-US"),
    label: "Description",
  },
];
export default function BrandAdmin() {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [brandObj, setBrandObj] = useState({});
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [brandDelete, setBrandDelete] = useState([]);

  useEffect(() => {
    dispatch(getBrands());
    // eslint-disable-next-line
  }, []);
  const { brands, message, error } = useSelector((state) => state.brandReducer);

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
    setBrandObj(select);
    setOpen(true);
    setIsUpdate(true);
  };
  const handleClose = () => {
    setOpen(false);
    setBrandObj({});
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setBrandDelete([]);
  };
  const handleAddBrand = () => {
    setOpen(true);
    setIsUpdate(false);
  };
  const handleChangeObj = (type)=>(e) => {
    if(type === "image"){
      setBrandObj((obj)=>({
        ...obj,
        image:e.target.files[0]
      }))
    }
    else{
      setBrandObj({ ...brandObj, [type]: e.target.value });
    }
  };
  const content = (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <TextField
        label="Brand"
        size="small"
        value={brandObj.name}
        onChange={handleChangeObj("name")}
      />
      <TextField
        size="small"
        onChange={handleChangeObj("image")}
        type="file"
      />
      <TextField
        label="Descrip"
        size="small"
        value={brandObj.descrip}
        onChange={handleChangeObj("descrip")}
      />
    </Box>
  );
  const contentDelete = (
    <Box>
      Are you sure want to delete these brands 
      {brandDelete.map((item) => {
        return ` ${item} `;
      })}{" "}
       ???
    </Box>
  );
  const handleDispatch = () => {
    let formData = new FormData();
    for (let key in brandObj) {
      formData.append(key, brandObj[key]);
    }
    if (isUpdate) {
      dispatch(updateBrand(brandObj.id, brandObj));
    } else {
      // console.log(formData);
      dispatch(addBrand(brandObj));
    }
    handleClose();
    setTimeout(handleOpenAlert, 2000);
  };
  const handleDeleteSelect = (select) => {
    setBrandDelete(select);
    setOpenDelete(true);
  };
  const handleDispatchDelete = () => {
    dispatch(deleteBrand(brandDelete));
    console.log(brandDelete);
    handleCloseDelete();
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
          onClick={handleAddBrand}
        >
          Add brand
        </Button>
      </div>

      <DataTable
        rows={brands}
        headCells={headCells}
        handleEditSelect={handleEditSelect}
        handleDeleteSelect={handleDeleteSelect}
      />
      <ModalForm
        title={"Brand"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
        handleDispatch={handleDispatch}
      />
      <ModalForm
        title={"Brand Delete"}
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
