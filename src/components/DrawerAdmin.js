import React, { useState } from "react";

import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

const DrawerAdmin = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <Link to="/admin/home">
          <List>
            <ListItemButton onClick={() => setopenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Link>
        <Link to="/admin/yourflight">
          <List>
            <ListItemButton onClick={() => setopenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>Your Flight </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Link>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setopenDrawer(!openDrawer)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerAdmin;
