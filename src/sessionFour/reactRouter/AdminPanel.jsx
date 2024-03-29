import React from "react";
import "../GlobalData/index-form-style.css"
 
const AdminPanel = () => {
  return (
    <div className="d-flex  flex-column flex-shrink-0 p-3 text-dark bg-dark" style={{ width: "280px" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Customers
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default AdminPanel;
