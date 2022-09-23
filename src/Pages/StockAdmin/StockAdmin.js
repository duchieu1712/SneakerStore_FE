import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../../Components/DataTable/DataTable";
import ModalForm from "../../Components/ModalForm/ModalForm";
import SearchInput from "../../Components/SearchInput/SearchInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  addProductSize,
  deleteProductSize,
  getProductSizeList,
  updateProductSize,
} from "../../Redux/Actions/productSize";
import { BsPlus } from "react-icons/bs";
import StatusAlert from "../../Components/StatusAlert/StatusAlert";

const headCells = [
  {
    id: "product",
    format: (value) => value.name,
    label: "Product name",
  },
  {
    id: "size",
    format: (value) => value.name,
    label: "Size",
  },
  {
    id: "amount",
    format: (value) => value,
    label: "Amount",
  },
];
export default function StockAdmin() {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [productSizeObj, setProductSizeObj] = useState({});
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [productSizeDelete, setProductSizeDelete] = useState([]);

  useEffect(() => {
    dispatch(getProductSizeList());
    // eslint-disable-next-line
  }, []);
  const { productSizeList, message, error } = useSelector(
    (state) => state.productSizeReducer
  );

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
    setProductSizeObj(select);
    setOpen(true);
    setIsUpdate(true);
  };
  const handleClose = () => {
    setOpen(false);
    setProductSizeObj({});
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setProductSizeDelete([]);
  };
  const handleAddProductSize = () => {
    setOpen(true);
    setIsUpdate(false);
  };
  const handleChangeObj = (e) => {
    setProductSizeObj({ ...productSizeObj, name: e.target.value });
  };
  const content = (
    <Box>
      <TextField
        label="Amount"
        size="small"
        value={productSizeObj.amount}
        onChange={handleChangeObj}
      />
    </Box>
  );
  const contentDelete = (
    <Box>
      Are you sure want to delete these productSize "
      {productSizeDelete.map((item) => {
        return `${item} `;
      })}{" "}
      " ???
    </Box>
  );
  const handleDispatch = () => {
    if (isUpdate) {
      dispatch(updateProductSize(productSizeObj.id, productSizeObj));
    } else {
      dispatch(addProductSize(productSizeObj));
    }
    handleClose();
    setTimeout(handleOpenAlert, 2000);
  };
  const handleDeleteSelect = (select) => {
    setProductSizeDelete(select);
    setOpenDelete(true);
  };
  const handleDispatchDelete = () => {
    dispatch(deleteProductSize(productSizeDelete));
    console.log(productSizeDelete);
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
          onClick={handleAddProductSize}
        >
          Add productSize
        </Button>
      </div>

      <DataTable
        rows={productSizeList}
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
      <StatusAlert
        message={message}
        error={error}
        openAlert={openAlert}
        onCloseAlert={handleCloseAlert}
      />
    </div>
  );
}
