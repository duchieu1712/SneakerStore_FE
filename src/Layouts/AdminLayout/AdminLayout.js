import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import sidebarConfig from "../../Utils/sidebarConfig";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FaBars } from "react-icons/fa";
import SearchInput from "../../Components/SearchInput/SearchInput";

export default function AdminLayout(props) {
  const [navOpen, setNavOpen] = useState(true);
  const handleOpen = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleOpen}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <FaBars />
          </IconButton>
          <Typography variant="h6" noWrap component="div"  sx={{ marginLeft: { xs: '0', sm: '300px' } }}>
            Sneaker Store
          </Typography>
          <SearchInput/>
        </Toolbar>
      </AppBar>
      <Sidebar
        onNavOpen={navOpen}
        onNavClose={() => {
          handleOpen();
        }}
        navConfig={sidebarConfig}
      />
      <Outlet />
    </>
  );
}
