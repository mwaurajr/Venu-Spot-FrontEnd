import React, { useState } from 'react';
import { FaTh, FaBars, FaHSquare, FaHome, FaHouseUser, FaUserEdit, FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="row">
            <div className={`col-sm-12 col-md-3 sidebar d-md-block ${isOpen ? '' : 'd-none'}`}>
                <div className="top_section">
                    <h1 className="logo">Manager Dashboard</h1>
                    <div className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                <NavLink to="/" className="link" activeclassName="active">
                    <div className="icon">
                        <FaTh />
                    </div>
                    <div className="link_text">Dashboard</div>
                </NavLink>
                <NavLink to="/my-clients" className="link" activeclassName="active">
                    <div className="icon">
                        <FaUserCircle />
                    </div>
                    <div className="link_text">My Clients</div>
                </NavLink>
                <NavLink to="/venues" className="link" activeclassName="active">
                    <div className="icon">
                        <FaHome />
                    </div>
                    <div className="link_text">Manage Venues</div>
                </NavLink>
                <NavLink to="/manage-venue" className="link" activeclassName="active">
                    <div className="icon">
                        <FaHouseUser/>
                    </div>
                    <div className="link_text">Add Venue</div>
                </NavLink>
                <NavLink to="/add-venue" className="link" activeclassName="active">
                    <div className="icon">
                        <FaUserEdit />
                    </div>
                    <div className="link_text">Edit Profile</div>
                </NavLink>
                {/* Add more menu items here */}
            </div>
            <div className={`col-sm-12 col-md-9 ${isOpen ? 'd-none' : 'd-md-block'}`}>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
