import React from 'react';
import "../GlobalData/index-form-style.css";
import { NavLink } from 'react-router-dom';
const SideBar = () => {
  return (
  <div className='container-fluid'>
    <div className="row">
      <div className="col">
      <div className="sidebar">
      <ul className="list-group">
  <li><NavLink to="/" className="list-group-item">داشبورد</NavLink></li>
  <li><NavLink to="/product" className="list-group-item">نمونه محصولات</NavLink></li>
  <li><NavLink to="/usesrslist" className="list-group-item">لیست کاربران</NavLink></li>
  <li><NavLink to="/users-comments" className="list-group-item">نظرات کاربران</NavLink></li>
  <li><NavLink to="/form-data-sample" className="list-group-item">نمونه فرم</NavLink></li>
  <li><NavLink to="/ref" className="list-group-item"> فرم با ref</NavLink></li>
  <li><NavLink to="/form-with-hook" className="list-group-item">فرم با REACT HOOK</NavLink></li>
  <li><NavLink to="/fetch-crud" className="list-group-item"> Fetch CRUD</NavLink></li>
  <li><NavLink to="/axios-crud" className="list-group-item"> Axios CRUD</NavLink></li>
  <li><NavLink to="/about-us" className="list-group-item">درباره ما</NavLink></li>
</ul>
    </div>
      </div>
    </div>
  </div>
  );
}
export default SideBar;