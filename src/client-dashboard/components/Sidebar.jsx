import React from "react";
import { NavLink as Link } from 'react-router-dom'

export default function UserSidebar() {
  return (
    <>
      <aside className="main-sidebar nav-pills sidebar-dark-primary sidebar-no-expand elevation-1">
        <Link to="/" className="brand-link">
          {/* <img
            // src="/src/assets/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-1"
            style={{ opacity: ".8" }}
          /> */}
          <span className="brand-text font-weight-light">Venu-Spot - user </span>

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
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-venue" className="nav-link">
                <i className="nav-icon fas fa-address-card"></i>
                  <p>About Venue-Spot</p>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/users" className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                  <p>My Clients</p>
                </Link>
              </li> */}
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

