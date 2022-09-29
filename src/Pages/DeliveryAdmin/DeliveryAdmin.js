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
import { addDelivery, deleteDelivery, getDeliveries, searchDelivery, updateDelivery } from "../../Redux/Actions/delivery";

const headCells = [
  {
    id: "id",
    format: (value) => value.toLocaleString("en-US"),
    label: "ID",
  },
 
  {
    id: "name",
    format: (value) => value.toLocaleString("en-US"),
    label: "Name service",
  },
  {
    id: "price",
    format: (value) => value.toLocaleString("en-US"),
    label: "Price",
  },
  {
    id: "estimate",
    format: (value) => value.toLocaleString("en-US"),
    label: "Estimate",
  },
  {
    id: "order_id",
    format: (value) => value.toLocaleString("en-US"),
    label: "Order ID",
  },
];
export default function DeliveryAdmin() {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [deliveryObj, setDeliveryObj] = useState({});
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [deliveryDelete,setDeliveryDelete] = useState([])

  useEffect(() => {
    dispatch(getDeliveries());
    // eslint-disable-next-line
  }, []);
  const { deliveries,searchDeliveries, message, error } = useSelector((state) => state.deliveryReducer);

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
    dispatch(searchDelivery({search:key}))
    setOpenAlert(true);
  };
  const handleEditSelect = (select) => {
    setDeliveryObj(select);
    setOpen(true);
    setIsUpdate(true)
  };
  const handleClose = () => {
    setOpen(false);
    setDeliveryObj({});
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setDeliveryDelete([]);
  };
  const handleAddDelivery = () => {
    setOpen(true);
    setIsUpdate(false)
  }
  const handleChangeObj = (type)=>(e) => {
    setDeliveryObj({...deliveryObj, [type]:e.target.value})
  }
  const content = (
    <Box component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}>
      <TextField label="Name service" size="small" value= {deliveryObj.name} onChange={handleChangeObj("name")}/>
      <TextField label="Price" size="small" type= "number" value= {deliveryObj.price} onChange={handleChangeObj("price")}/>
      <TextField label="Estimate" size="small" value= {deliveryObj.estimate} onChange={handleChangeObj("estimate")}/>
    </Box>
  );
  const contentDelete = (
    <Box>
      Are you sure want to delete these delivery "{deliveryDelete.map((item)=>{
        return(
          `${item} `
        )
      })} " ???
      
    </Box>
  );
  const handleDispatch = () => {
    if(isUpdate){
      dispatch(updateDelivery(deliveryObj.id,deliveryObj))
    }else{
      dispatch(addDelivery(deliveryObj))
      console.log(deliveryObj);
    }
    handleClose();
    setTimeout(handleOpenAlert, 2000)
  }
  const handleDeleteSelect = (select)=>{
    setDeliveryDelete(select)
    setOpenDelete(true)
  }
  const handleDispatchDelete = ()=>{
    dispatch(deleteDelivery(deliveryDelete))
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
      <Button variant="contained" startIcon={<BsPlus />} onClick={handleAddDelivery}>
        Add delivery
      </Button>
      </div>
      
      <DataTable
        rows={searchDeliveries ? searchDeliveries : deliveries}
        headCells={headCells}
        handleEditSelect={handleEditSelect}
        handleDeleteSelect={handleDeleteSelect}
      />
      <ModalForm
        title={"Delivery"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
        handleDispatch={handleDispatch}
      />
      <ModalForm
        title={"Delivery Delete"}
        open={openDelete}
        handleClose={() => handleCloseDelete()}
        formInput={contentDelete}
        handleDispatch={handleDispatchDelete}
      />
      <StatusAlert message={message} error={error} openAlert={openAlert} onCloseAlert={handleCloseAlert}/>
    </div>
  );
}
