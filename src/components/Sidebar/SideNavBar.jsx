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

    const [addrtypeNow, setAddrtypeNow] = useState("Dashboard");

    const Add = addrtype.map((Add) => Add);
  
    let showit = true;
    if (width > 1024) showit = true;
    else showit = false;
 
    return (
        <div className="sidenavbar">
        <div className="sidenavbarWrapper">
          {width < 1024 ? (
            <>
              <div className="custom-select-div">
                <select
                  onChange={(e) => setAddrtypeNow(addrtype[e.target.value])}
                  className="custom-select"
                >
                      {Add.map((address, key) => (
                  <option key={key} value={key}>
                    {address}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <></>
        )}
        </div>
        </div>
      );
    }

    export default SideNavBar;