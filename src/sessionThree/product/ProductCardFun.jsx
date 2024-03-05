//استفاده از onchange در فرم ها
//این روش خیلی پیشنهاد نمی شه
import React from "react";

const ProductCardFun = ({ product, removeCard,edit }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header h5 bg-success text-warning">Product</div>
        <div className="card-body">
          <h4>
            <span className="text-danger">Card Id: </span>
            {product.id}
          </h4>
          <h5>
            <span className="text-danger">Card Title: </span>
            {product.title}
          </h5>
          <h6>
            <span className="text-danger">Card Price: </span>
            {product.price}
          </h6>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-sm btn-info"
            onClick={() => removeCard(product.id)}
          >
            Remove
          </button>
          <button
            className="btn btn-sm btn-warning mx-3"
            onClick={() => edit(product.id)}
          >
            Edit
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCardFun;
