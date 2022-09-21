import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import sidebarConfig from "../../Utils/sidebarConfig";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FaBars } from "react-icons/fa";

export default function AdminLayout({children}) {
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
          <Typography variant="h6" noWrap component="div"  sx={{ marginLeft: { xs: '0', sm: '300px' }, mr: 3 }}>
            Sneaker Store Management
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar
        onNavOpen={navOpen}
        onNavClose={() => {
          handleOpen();
        }}
        navConfig={sidebarConfig}
      />
      <Box sx={{ ml: { xs: '20px', sm: '280px' }, mt: '80px', mr: '20px'}}>
      {children}
      </Box>
      
    </>
  );
}
