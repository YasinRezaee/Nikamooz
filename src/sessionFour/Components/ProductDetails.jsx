import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
//npm i query-string
import  queryString from 'query-string';

export const ProductDetails = () => {
    const navigate= useNavigate()
    const loc= useLocation()
    const {id}=useParams()
    const params=queryString.parse(loc.search)
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4>
            کد محصول: {id} - {params.id}
          </h4>
          <h5>نام محصول: {params.title}</h5>
          <footer>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/product");
              }}
            >
              بازگشت به لیست
            </button>
          </footer>{" "}
        </div>
      </div>
    </>
  );
};
