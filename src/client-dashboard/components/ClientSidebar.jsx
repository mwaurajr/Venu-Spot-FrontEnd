import React from "react";
import { NavLink as Link } from 'react-router-dom'

export default function ClientSidebar() {
  return (
    <>
      <aside className="main-sidebar nav-pills sidebar-dark-primary sidebar-no-expand elevation-1">
        <Link to="/client-side" className="brand-link">
        
          <span className="brand-text font-weight-light">Venu-Spot - Client </span>

        </Link>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/client-home" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Client Home</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about-venue" className="nav-link">
                <i className="nav-icon fas fa-address-card"></i>
                  <p>About Venue-Spot</p>
                </Link>
              </li>
             
              <li className="nav-item">
                <Link to="/my-bookings" className="nav-link">
                <i className="nav-icon fas fa-home"></i>
                  <p>My Bookings</p>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/user-profile" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                  <p>My Profile</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

