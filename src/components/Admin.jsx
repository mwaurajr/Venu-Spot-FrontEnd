import React from "react";
import SideBar from "./SideBar";
import Venues from "./Venues";

function Admin() {
    return (
        <div className="App">
            <SideBar />
            <Venues />
        </div>
    )
}

export default Admin