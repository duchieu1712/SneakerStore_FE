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
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../Redux/Actions/product";

const headCells = [
  {
    id: "id",
    format: (value) => value.toLocaleString("en-US"),
    label: "ID",
  },
  {
    id: "name",
    format: (value) => value.toLocaleString("en-US"),
    label: "Name product",
  },
  {
    id: "image",
    format: (value) => {return value.split(",")[0]},
    label: "Image",
  },
  {
    id: "descrip",
    format: (value) => value.toLocaleString("en-US"),
    label: "Description",
  },
  {
    id: "highlights",
    format: (value) => value.toLocaleString("en-US"),
    label: "Highlights",
  },
  {
    id: "size",
    format: (value) => value.toLocaleString("en-US"),
    label: "Size",
  },
  {
    id: "category",
    format: (value) => value.name,
    label: "Category",
  },
  {
    id: "brand",
    format: (value) => value.name,
    label: "Brand",
  },
  {
    id: "discount",
    format: (value) => {return value.name +" with " + value.percent+"%"},
    label: "Discount",
  },
  {
    id: "price",
    format: (value) => {return value.toLocaleString("en-US")+"$"},
    label: "Price",
  },
  {
    id: "price_discounted",
    format: (value) => {return value.toLocaleString("en-US")+"$"},
    label: "Price discounted",
  },
  {
    id: "created_date",
    format: (value) => value.toLocaleString("en-US"),
    label: "Created date",
  },
];
export default function ProductAdmin() {
  const dispatch = useDispatch();
  const [key, setKey] = useState("");
  const [productObj, setProductObj] = useState({});
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [productDelete, setProductDelete] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);
  const { products, message, error } = useSelector(
    (state) => state.productReducer
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
    setProductObj(select);
    setOpen(true);
    setIsUpdate(true);
  };
  const handleClose = () => {
    setOpen(false);
    setProductObj({});
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    setProductDelete([]);
  };
  const handleAddProduct = () => {
    setOpen(true);
    setIsUpdate(false);
  };
  const handleChangeObj = (type) => (e) => {
    if (type === "image") {
      setProductObj((obj) => ({
        ...obj,
        image: e.target.files[0],
      }));
    } else {
      setProductObj({ ...productObj, [type]: e.target.value });
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
        label="Product"
        size="small"
        value={productObj.name}
        onChange={handleChangeObj("name")}
      />
      <TextField size="small" onChange={handleChangeObj("image")} type="file" />
      <TextField
        label="Descrip"
        size="small"
        value={productObj.descrip}
        onChange={handleChangeObj("descrip")}
      />
    </Box>
  );
  const contentDelete = (
    <Box>
      Are you sure want to delete these products
      {productDelete.map((item) => {
        return ` ${item} `;
      })}{" "}
      ???
    </Box>
  );
  const handleDispatch = () => {
    let formData = new FormData();
    for (let key in productObj) {
      formData.append(key, productObj[key]);
    }
    if (isUpdate) {
      dispatch(updateProduct(productObj.id, productObj));
    } else {
      // console.log(formData);
      dispatch(addProduct(productObj));
    }
    handleClose();
    setTimeout(handleOpenAlert, 1000);
  };
  const handleDeleteSelect = (select) => {
    setProductDelete(select);
    setOpenDelete(true);
  };
  const handleDispatchDelete = () => {
    dispatch(deleteProduct(productDelete));
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
          onClick={handleAddProduct}
        >
          Add product
        </Button>
      </div>

      <DataTable
        rows={products}
        headCells={headCells}
        handleEditSelect={handleEditSelect}
        handleDeleteSelect={handleDeleteSelect}
      />
      <ModalForm
        title={"Product"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
        handleDispatch={handleDispatch}
      />
      <ModalForm
        title={"Product Delete"}
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
