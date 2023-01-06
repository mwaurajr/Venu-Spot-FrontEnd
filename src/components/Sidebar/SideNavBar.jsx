import React, {useState} from "react";
import "./SideNavBar.css";

function SideNavBar(props) {
    let width = props.width;
  
    if (width > 1024) console.log("Its 1024+", width);
    else console.log("Its not 1024+", width);
  
    const [addrtype] = useState([
      "Dashboard",
      "Quick Menu",
      "Venues",
      "Clients",
    ]);
