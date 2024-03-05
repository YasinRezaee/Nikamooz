import React, { useState } from "react";
import logo from "../GlobalData/logo.png";
import { MdOutlineLogin } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location= useLocation()
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
  // get data from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="Logo" />
          </a>
          <div className="text-light mx-5">
            {" "}
            {user !== null ? user.fullName : null}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!collapsed}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="navbarNav"
          >
            <ul className=" d-flex navbar-nav ms-auto">
              <li className="nav-item align-items-start">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="جستجو"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    جستجو
                  </button>
                </form>
              </li>
              <li><span className="text-light mx-3">({location.pathname})</span></li>
            </ul>
            <div
              onClick={() => logOut()}
              className="text-light"
              style={{ fontSize: "35px" }}
            >
              <span style={{ fontSize: "15px" }}>LogOut</span>{" "}
              <MdOutlineLogin />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
