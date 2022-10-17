import React from "react";
import { Toolbar, Typography } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import FlightIcon from '@mui/icons-material/Flight';

const Footer = () => {
  return (
    <div className="footer">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography sx={{ display: "flex" }}>
          <h2 style={{ textAlign: "center" }}>Flight Ticket App</h2>
          <FlightIcon
            style={{
              fontSize: "40px",
              marginTop: "20px",
              marginLeft: "auto",
            }}
          />
        </Typography>
        
      </Toolbar>
      <div style={{ textAlign: "center", fontSize:"15px"}} className="footer">
        © 2022 Copyright: www.flightticketapp.com
      </div>
      
    </div>
  );
};

export default Footer;
