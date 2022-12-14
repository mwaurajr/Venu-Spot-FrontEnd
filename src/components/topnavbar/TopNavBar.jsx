import React from "react";
import "./TopNavBar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

function TopNavBar(props) {
  return (
    <div className="topnavbar">
    <div className="topnavbarWrapper">
      <div className="topnavLeft">
        <span className="mainlogo">Manager Dashboard</span>
      </div>
      <div className="topnavRight">
        <div className="topnavbarIconContainer">
          <Language />
          <div className="dropdown-content">
            <p>English</p>
            <p>Swahili</p>
          </div>
        </div>
    
        <div className="topnavbarIconContainer">
          <NotificationsNone />
          <span className="topnavIconBadge">2</span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default TopNavBar;