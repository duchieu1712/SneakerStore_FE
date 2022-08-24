import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "../../Components/DataTable/DataTable";
import ModalForm from "../../Components/ModalForm/ModalForm";
import SearchInput from "../../Components/SearchInput/SearchInput";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import { getCategories } from "../../Redux/Actions/category";
import { BsPlus } from "react-icons/bs";

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
  const [editSelect, setEditSelect] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);
  const { categories } = useSelector((state) => state.categoryReducer);
  console.log(categories);
  const handleChange = (e) => {
    setKey(e.target.value);
  };
  const handleSearch = () => {
    console.log(key);
  };
  const handleEditSelect = (select) => {
    setEditSelect(select);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEditSelect({});
  };
  console.log(editSelect);
  const content = (
    <Box sx={{mt:"20px"}}>
      <TextField label="Category" size="small" value={editSelect.name}/>
    </Box>
  );
  return (
    <div>
      <div className="flex justify-between mb-2">
        <SearchInput
        onHandleChange={handleChange}
        onHandleSearch={handleSearch}
      />
      <Button variant="contained" startIcon={<BsPlus />} onClick={() => setOpen(true)}>
        Add category
      </Button>
      </div>
      
      <DataTable
        rows={categories}
        headCells={headCells}
        handleEditSelect={handleEditSelect}
      />
      <ModalForm
        title={"Category"}
        open={open}
        handleClose={() => handleClose()}
        formInput={content}
      />
    </div>
  );
}
