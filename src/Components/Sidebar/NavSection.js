import React from "react";
import PropTypes from "prop-types";
import { Box, List, ListItemButton } from "@mui/material";
import ListItemLink from "./ListItemLink";
NavSection.propTypes = {
  navConfig: PropTypes.array,
};

export default function NavSection({ navConfig, ...other }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box {...other}>
      <List disablePadding>
        {navConfig.map((item, index) => (
          <ListItemButton
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
          >
            <ListItemLink
              to={item.href}
              primary={item.title}
              icon={item.icon}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
