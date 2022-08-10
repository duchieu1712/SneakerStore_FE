import React from "react";
import NavSection from "./NavSection";
import { Box, Divider, Drawer, Typography, Hidden } from "@mui/material";
import "./Sidebar.css";

const Sidebar = ({ onNavOpen, onNavClose, navConfig }) => {
  const content = (
    <Box
      height="100%"
      width="270px"
      display="flex"
      flexDirection="column"
      boxShadow={3}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={"10px"}
      >
        <h3 style={{ fontWeight: 700 }}>Brand</h3>
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
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          // classes={{ paper: classes.desktopDrawer }}
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
