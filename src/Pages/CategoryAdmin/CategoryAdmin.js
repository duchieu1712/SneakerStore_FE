import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../../Components/DataTable/DataTable";
import ModalForm from "../../Components/ModalForm/ModalForm";
import SearchInput from "../../Components/SearchInput/SearchInput";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { addCategory, deleteCategory, getCategories, updateCategory } from "../../Redux/Actions/category";
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
    label: "Category",
  },
];
export default function CategoryAdmin() {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [categoryObj, setCategoryObj] = useState({});
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [categoryDelete,setCategoryDelete] = useState([])

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);
  const { categories, message, error } = useSelector((state) => state.categoryReducer);

  const handleOpenAlert = () => {
    setOpenAlert(true)
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
    setCategoryObj(select);
    setOpen(true);
    setIsUpdate(true)
  };
  const handleClose = () => {
    setOpen(false);
    setCategoryObj({});
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setCategoryDelete([]);
  };
  const handleAddCategory = () => {
    setOpen(true);
    setIsUpdate(false)
  }
  const handleChangeObj = (e) => {
    setCategoryObj({...categoryObj, name:e.target.value})
  }
  const content = (
    <Box>
      <TextField label="Category" size="small" value={categoryObj.name} onChange={handleChangeObj}/>
    </Box>
  );
  const contentDelete = (
    <Box>
      Are you sure want to delete these categories {categoryDelete.map((item)=>{
        return(
          `${item} `
        )
      })} ???
      
    </Box>
  );
  const handleDispatch = () => {
    if(isUpdate){
      dispatch(updateCategory(categoryObj.id,categoryObj))
    }else{
      dispatch(addCategory(categoryObj))
    }
    handleClose();
    setTimeout(handleOpenAlert, 2000)
  }
  const handleDeleteSelect = (select)=>{
    setCategoryDelete(select)
    setOpenDelete(true)
  }
  const handleDispatchDelete = ()=>{
    dispatch(deleteCategory(categoryDelete))
    console.log(categoryDelete);
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
      <Button variant="contained" startIcon={<BsPlus />} onClick={handleAddCategory}>
        Add category
      </Button>
      </div>
      
      <DataTable
        rows={categories}
        headCells={headCells}
        handleEditSelect={handleEditSelect}
        handleDeleteSelect={handleDeleteSelect}
      />
      <ModalForm
        title={"Category"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
        handleDispatch={handleDispatch}
      />
      <ModalForm
        title={"Category Delete"}
        open={openDelete}
        handleClose={() => handleCloseDelete()}
        formInput={contentDelete}
        handleDispatch={handleDispatchDelete}
      />
      <StatusAlert message={message} error={error} openAlert={openAlert} onCloseAlert={handleCloseAlert}/>
    </div>
  );
}
