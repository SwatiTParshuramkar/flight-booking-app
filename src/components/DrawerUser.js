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

const DrawerUser = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setopenDrawer(false)}>
        <List>
          <Link to="user/home">
            <ListItemButton onClick={() => setopenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>Home </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>
          <Link to="user/yourticket">
            <ListItemButton onClick={() => setopenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>Your Tickets </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>
        </List>
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

export default DrawerUser;
