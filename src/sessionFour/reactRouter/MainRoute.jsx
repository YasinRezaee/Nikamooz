import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDashboard from "./dashboard/MainDashboard";
import ProductContainer from "../Components/ProductContainer";
import AboutUs from "../Components/AboutUs";
import SideBar from "../reactRouter/SideBar";
import FormDataSample from "../FormDataSample";
import NotFound from "../Components/NotFounf";
import HookForm from "../Components/HookForm";
import Navbar from "../Components/Navbar";
import { ProductDetails } from "../Components/ProductDetails";
import Login from "../Components/Login";
import PrivetRoute from "./PrivateRoute";
import UsersList from "../Components/users/UsersList";
import UserPost from "../Components/post/UserPost";
import FormWithRef from "../Components/FormWithRef";
import FetchCrud from "../crud/FetchCrud";
import AxiousCrud from "../crud/axious/AxiousCrud";
import SignUp from "../Components/SignUp";
const MainRoute = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <div className="main-panel">
          <SideBar />
          <div className="content card my-5">
            <div className="card-body">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/login/:signup" element={<SignUp/>} />
                <Route path="/" element={<PrivetRoute />}>
                      <Route path="/" element={<MainDashboard />} />
                      <Route path="/product" element={<ProductContainer />} />
                      <Route path="/usesrslist" element={<UsersList/>} />
                      <Route path="/users-comments" element={<UserPost/>} />
                      <Route path="/product/:id" element={<ProductDetails />} />
                      <Route path="/product/info" exact element={<ProductDetails />} />
                      <Route path="/form-data-sample" element={<FormDataSample />} />
                      <Route path="/form-with-hook" element={<HookForm />} />
                      <Route path="/ref" element={<FormWithRef/>} />
                      <Route path="/fetch-crud" element={<FetchCrud/>} />
                      <Route path="/axios-crud" element={<AxiousCrud/>} />
                      <Route path="/about-us" element={<AboutUs />} />
                      <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default MainRoute;
