import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../../Components/DataTable/DataTable";
import ModalForm from "../../Components/ModalForm/ModalForm";
import SearchInput from "../../Components/SearchInput/SearchInput";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { addSize, deleteSize, getSizes, updateSize } from "../../Redux/Actions/size";
import { BsPlus } from "react-icons/bs";
import StatusAlert from "../../Components/StatusAlert/StatusAlert";

const headCells = [
  {
    id: "id",
    format: (value) => value.toLocaleString("en-US"),
    label: "ID",
  },
  {
    id: "name",
    format: (value) => value.toLocaleString("en-US"),
    label: "Size",
  },
];
export default function SizeAdmin() {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [sizeObj, setSizeObj] = useState({});
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [sizeDelete,setSizeDelete] = useState([])

  useEffect(() => {
    dispatch(getSizes());
    // eslint-disable-next-line
  }, []);
  const { sizes, message, error } = useSelector((state) => state.sizeReducer);

  const handleOpenAlert = () => {
    setOpenAlert(true)
    setTimeout(function(){
      window.location.reload(1);
   }, 2000);
  }
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
    setSizeObj(select);
    setOpen(true);
    setIsUpdate(true)
  };
  const handleClose = () => {
    setOpen(false);
    setSizeObj({});
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setSizeDelete([]);
  };
  const handleAddSize = () => {
    setOpen(true);
    setIsUpdate(false)
  }
  const handleChangeObj = (e) => {
    setSizeObj({...sizeObj, name:e.target.value})
  }
  const content = (
    <Box>
      <TextField label="Size" size="small" value={sizeObj.name} onChange={handleChangeObj}/>
    </Box>
  );
  const contentDelete = (
    <Box>
      Are you sure want to delete these sizes "{sizeDelete.map((item)=>{
        return(
          `${item} `
        )
      })} " ???
      
    </Box>
  );
  const handleDispatch = () => {
    if(isUpdate){
      dispatch(updateSize(sizeObj.id,sizeObj))
    }else{
      dispatch(addSize(sizeObj))
    }
    handleClose();
    setTimeout(handleOpenAlert, 2000)
  }
  const handleDeleteSelect = (select)=>{
    setSizeDelete(select)
    setOpenDelete(true)
  }
  const handleDispatchDelete = ()=>{
    dispatch(deleteSize(sizeDelete))
    console.log(sizeDelete);
    handleCloseDelete();
    setTimeout(handleOpenAlert, 2000)
  }
  return (
    <div>
      <div className="flex justify-between mb-2">
        <SearchInput
        onHandleChange={handleChange}
        onHandleSearch={handleSearch}
      />
      <Button variant="contained" startIcon={<BsPlus />} onClick={handleAddSize}>
        Add size
      </Button>
      </div>
      
      <DataTable
        rows={sizes}
        headCells={headCells}
        handleEditSelect={handleEditSelect}
        handleDeleteSelect={handleDeleteSelect}
      />
      <ModalForm
        title={"Size"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
        handleDispatch={handleDispatch}
      />
      <ModalForm
        title={"Size Delete"}
        open={openDelete}
        handleClose={() => handleCloseDelete()}
        formInput={contentDelete}
        handleDispatch={handleDispatchDelete}
      />
      <StatusAlert message={message} error={error} openAlert={openAlert} onCloseAlert={handleCloseAlert}/>
    </div>
  );
}
