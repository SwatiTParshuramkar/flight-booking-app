import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

import LogoutIcon from "@mui/icons-material/Logout";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import DrawerAdmin from "./DrawerAdmin";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("userToken");
    navigate("/admin/signin");
  };

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "crimson" }}>
        <Toolbar>
          <Toolbar sx={{ justifyContent: "center" }}>
            <Typography sx={{ display: "flex" }}>
              <h2 style={{ textAlign: "center" }}>Flight Booking  App</h2>
              <ConfirmationNumberIcon
                style={{
                  fontSize: "40px",
                  marginTop: "20px",
                  marginLeft: "auto",
                }}
              />
            </Typography>
          </Toolbar>
          {isMatch ? (
            <>
              <Typography></Typography>
              <DrawerAdmin />
            </>
          ) : (
            <>
              <Typography sx={{ marginLeft: "auto" }}>
                <Tabs
                  textColor="white"
                  sx={{ justifyContent: "space-between" }}
                >
                  <Tab href="/admin/home" label="Home" />
                  <Tab href="/admin/yourflight" label="Your Flight" />
                  <LogoutIcon
                    sx={{
                      fontSize: "200%",
                      marginLeft: "10vh",
                      marginTop: "1vh",
                    }}
                    onClick={() => Logout()}
                  ></LogoutIcon>
                </Tabs>
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default AdminNav;
