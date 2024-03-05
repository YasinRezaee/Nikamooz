//استفاده از onchange در فرم ها
//این روش خیلی پیشنهاد نمی شه

import React, { useState } from "react";

const ProductCardFunEditMode = ({product,cancel,save}) => {
  const [id,addId]= useState(product.id)
  const [title,addTitle]= useState(product.title)
  const [price,addPrice]= useState(product.price)
  const saveChanges=( )=>{
  const newItem={id, title, price, editMode: false}
    save(newItem)
 }
  return (
    <div className="col">
      <div className="card">
        <div className="card-header h5 bg-success text-warning">Product</div>
        <div className="card-body">
          <div>
            Card Id:<input onChange={(e)=>addId(e.target.value)} name="id" defaultValue={product.id} />
          </div>
          <div>
           Card Title:<input onChange={(e)=>addTitle(e.target.value)} name="title" defaultValue={product.title}/>
          </div>
          <div>
            Card Price:<input onChange={(e)=>addPrice(parseInt(e.target.value))} name="price" defaultValue={product.price}/>
          </div>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-sm btn-info"
            onClick={()=>saveChanges()}
          >
            Save
          </button>
          <button
            className="btn btn-sm btn-warning mx-3"
            onClick={() => cancel(product.id, false)}
          >
            Cancel
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCardFunEditMode;
