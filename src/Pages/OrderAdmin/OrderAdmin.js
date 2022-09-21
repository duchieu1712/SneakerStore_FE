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
  addOrder,
  deleteOrder,
  getOrders,
  updateOrder,
} from "../../Redux/Actions/order";
import { getOrderDetails } from "../../Redux/Actions/orderDetail";

const headCells = [
  {
    id: "id",
    format: (value) => value.toLocaleString("en-US"),
    label: "ID",
  },
  {
    id: "total_price",
    format: (value) => {
      return value ? value + "$" : "Not yet";
    },
    label: "Total price",
  },
  {
    id: "ordercreate_time",
    format: (value) => value.toLocaleString("en-US"),
    label: "Created time",
  },
  {
    id: "VAT",
    format: (value) => {
      return value + "%";
    },
    label: "VAT",
  },
  {
    id: "orderconfirm_time",
    format: (value) => {
      return value ? value + "$" : "Not yet";
    },
    label: "Confirmed order time",
  },
  {
    id: "user",
    format: (value) => value.email,
    label: "User email",
  },
  {
    id: "delivery",
    format: (value) => {
      return value ? value.name : "Not yet";
    },
    label: "Delivery service",
  },
  {
    id: "order_status",
    format: (value) => {
      if (value === 0) {
        return "Shopping";
      } else {
        return "Ordered";
      }
    },
    label: "Status",
  },
];

const headCellsView = [
  {
    id: "id",
    format: (value) => value.toLocaleString("en-US"),
    label: "ID",
  },
  {
    id: "amount",
    format: (value) => value.toLocaleString("en-US"),
    label: "Amount",
  },
  {
    id: "order_id",
    format: (value) => value.toLocaleString("en-US"),
    label: "Order ID",
  },
  {
    id: "size",
    format: (value) => value.toLocaleString("en-US"),
    label: "Size",
  },
  {
    id: "product",
    format: (value) => value?.id,
    label: "Product ID",
  },
  {
    id: "product",
    format: (value) => value?.name,
    label: "Product Name",
  },
  {
    id: "product",
    format: (value) => value?.price,
    label: "Product Price",
  },
  {
    id: "product",
    format: (value) => value?.descrip,
    label: "Product Descrip",
  },
  {
    id: "product",
    format: (value) => value?.highlights,
    label: "Product Highlights",
  },
  {
    id: "product",
    format: (value) => value?.image,
    label: "Product Image",
  },

];

export default function OrderAdmin() {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [orderObj, setOrderObj] = useState({});
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [orderDelete, setOrderDelete] = useState([]);
  const [optionsCheck, setOptionsCheck] = useState(true);

  useEffect(() => {
    dispatch(getOrders());
    // eslint-disable-next-line
  }, []);
  const { orders, message, error } = useSelector((state) => state.orderReducer);
  const { orderDetails } = useSelector((state) => state.orderDetailReducer);
  const handleOpenAlert = () => {
    setOpenAlert(true);
    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
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
    setOrderObj(select);
    setOpen(true);
    setIsUpdate(true);
  };
  const handleViewSelect = (select) => {
    dispatch(getOrderDetails(select.id));
    setOrderObj(select);
    setOpenView(true);
    setOptionsCheck(false);
  };
  const handleClose = () => {
    setOpen(false);
    setOrderObj({});
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setOrderDelete([]);
  };
  const handleCloseView = () => {
    setOpenView(false);
    setOrderDelete([]);
    setOptionsCheck(true);
  };
  const handleAddOrder = () => {
    setOpen(true);
    setIsUpdate(false);
  };
  const handleChangeObj = (type) => (e) => {
    setOrderObj({ ...orderObj, [type]: e.target.value });
  };
  const content = (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      {/* <TextField label="Order" size="small" value={orderObj.name} onChange={handleChangeObj("name")}/> */}
      {/* <TextField label="Percent" type="number" size="small" value= {orderObj.percent} onChange={handleChangeObj("percent")}/> */}
    </Box>
  );
  const contentDelete = (
    <Box>
      Are you sure want to delete these orders "
      {orderDelete.map((item) => {
        return `${item} `;
      })}{" "}
      " ???
    </Box>
  );
  const contentView = (
    <DataTable rows={orderDetails} headCells={headCellsView} />
  );
  const handleDispatch = () => {
    if (isUpdate) {
      dispatch(updateOrder(orderObj.id, orderObj));
    } else {
      dispatch(addOrder(orderObj));
      console.log(orderObj);
    }
    handleClose();
    setTimeout(handleOpenAlert, 2000);
  };
  const handleDeleteSelect = (select) => {
    setOrderDelete(select);
    setOpenDelete(true);
  };
  const handleDispatchDelete = () => {
    dispatch(deleteOrder(orderDelete));
    console.log(orderDelete);
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
          onClick={handleAddOrder}
        >
          Add order
        </Button>
      </div>

      <DataTable
        rows={orders}
        headCells={headCells}
        handleEditSelect={handleEditSelect}
        handleDeleteSelect={handleDeleteSelect}
        handleViewSelect={handleViewSelect}
        optionsCheck={optionsCheck}
      />
      <ModalForm
        title={"Order"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
        handleDispatch={handleDispatch}
      />
      <ModalForm
        title={"Order Delete"}
        open={openDelete}
        handleClose={() => handleCloseDelete()}
        formInput={contentDelete}
        handleDispatch={handleDispatchDelete}
      />
      <ModalForm
        title={"View Order Detail"}
        open={openView}
        handleClose={() => handleCloseView()}
        formInput={contentView}
        width="100"
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
