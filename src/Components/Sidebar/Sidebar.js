import React from "react";
import NavSection from "./NavSection";
import { Box, Divider, Drawer, Typography, Hidden } from "@mui/material";
import "./Sidebar.css";

const Sidebar = ({ onNavOpen, onNavClose, navConfig }) => {
  const content = (
    <Box
      height="100%"
      width="250px"
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={"10px"}
      >
        <h3 style={{ fontWeight: 700, color: "#007aff" }}>Sneaker Store</h3>
        <Typography variant="caption">version 1.0.0</Typography>
      </Box>

      <Divider />

      <NavSection navConfig={navConfig} />
    </Box>
  );

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          open={onNavOpen}
          onClose={onNavClose}
          variant="temporary"
          elevation={3}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default Sidebar;
