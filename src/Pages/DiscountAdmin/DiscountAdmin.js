import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../../Components/DataTable/DataTable";
import ModalForm from "../../Components/ModalForm/ModalForm";
import SearchInput from "../../Components/SearchInput/SearchInput";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { BsPlus } from "react-icons/bs";
import StatusAlert from "../../Components/StatusAlert/StatusAlert";
import { addDiscount, deleteDiscount, getDiscounts, searchDiscount, updateDiscount } from "../../Redux/Actions/discount";

const headCells = [
  {
    id: "id",
    format: (value) => value.toLocaleString("en-US"),
    label: "ID",
  },
 
  {
    id: "name",
    format: (value) => value.toLocaleString("en-US"),
    label: "Discount",
  },
  {
    id: "percent",
    format: (value) => {return value.toLocaleString("en-US")+"%"},
    label: "Percent",
  },
  
];
export default function DiscountAdmin() {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [discountObj, setDiscountObj] = useState({});
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [discountDelete,setDiscountDelete] = useState([])

  useEffect(() => {
    dispatch(getDiscounts());
    // eslint-disable-next-line
  }, []);
  const { discounts, searchDiscounts, message, error } = useSelector((state) => state.discountReducer);

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
    dispatch(searchDiscount({search:key}))
    setOpenAlert(true);
  };
  const handleEditSelect = (select) => {
    setDiscountObj(select);
    setOpen(true);
    setIsUpdate(true)
  };
  const handleClose = () => {
    setOpen(false);
    setDiscountObj({});
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setDiscountDelete([]);
  };
  const handleAddDiscount = () => {
    setOpen(true);
    setIsUpdate(false)
  }
  const handleChangeObj = (type)=>(e) => {
    setDiscountObj({...discountObj, [type]:e.target.value})
  }
  const content = (
    <Box component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}>
      <TextField label="Discount" size="small" value={discountObj.name} onChange={handleChangeObj("name")}/>
      <TextField label="Percent" type="number" size="small" value= {discountObj.percent} onChange={handleChangeObj("percent")}/>
    </Box>
  );
  const contentDelete = (
    <Box>
      Are you sure want to delete these discounts "{discountDelete.map((item)=>{
        return(
          `${item} `
        )
      })} " ???
      
    </Box>
  );
  const handleDispatch = () => {
    if(isUpdate){
      dispatch(updateDiscount(discountObj.id,discountObj))
    }else{
      dispatch(addDiscount(discountObj))
      console.log(discountObj);
    }
    handleClose();
    setTimeout(handleOpenAlert, 2000)
  }
  const handleDeleteSelect = (select)=>{
    setDiscountDelete(select)
    setOpenDelete(true)
  }
  const handleDispatchDelete = ()=>{
    dispatch(deleteDiscount(discountDelete))
    console.log(discountDelete);
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
      <Button variant="contained" startIcon={<BsPlus />} onClick={handleAddDiscount}>
        Add discount
      </Button>
      </div>
      
      <DataTable
        rows={searchDiscounts ? searchDiscounts : discounts}
        headCells={headCells}
        handleEditSelect={handleEditSelect}
        handleDeleteSelect={handleDeleteSelect}
      />
      <ModalForm
        title={"Discount"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
        handleDispatch={handleDispatch}
      />
      <ModalForm
        title={"Discount Delete"}
        open={openDelete}
        handleClose={() => handleCloseDelete()}
        formInput={contentDelete}
        handleDispatch={handleDispatchDelete}
      />
      <StatusAlert message={message} error={error} openAlert={openAlert} onCloseAlert={handleCloseAlert}/>
    </div>
  );
}
