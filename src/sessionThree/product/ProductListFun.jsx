//استفاده از onchange در فرم ها
//این روش خیلی پیشنهاد نمی شه

import React, { useState, useEffect} from "react";
import ProductCardFun from "./ProductCardFun";
import ProductCardFunEditMode from "./ProductCardFunEditMode";
const initialList = [
  { id: 401, title: "Mouse", price: 25, editMode: false },
  { id: 402, title: "LCD", price: 25, editMode: false },
  { id: 403, title: "Power", price: 25, editMode: false },
];

const ProductListFun = () => {
  const [list, setList] = useState(initialList);
  useEffect(() => {
    console.log("ProductListFun DidMount")
    console.log("ProductListFun DidUpdate")
    return () => {
      console.log("ProductListFun WillUnmount")
    }
  }, [list])

  const removeList = (id) => {
    if(window.confirm("Are You Sure?")){
      const removedRow = list.filter((row) => row.id !== id);
      setList([...removedRow]);
    }
  };
  const setEditMode=(id, mode =true)=>{
   const index= list.findIndex(q=>q.id === id);
   list[index].editMode=mode;
   setList([...list])
  }
  // const addItem=(item)=>{
  //   setList([...list, item])
  // }
  const editItem=(item)=>{
    const temp= [...list]
    const index= list.findIndex(q=>q.id === item.id);
    temp[index]=item;
    setList([...temp])
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>These Itemes are displayed by using function component</h4>
         
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {list.map((card) => (
              card.editMode ?
              <ProductCardFunEditMode key={card.id} save={editItem}  product={card} cancel={setEditMode} />
              :<ProductCardFun key={card.id} product={card} edit={setEditMode}  removeCard={removeList}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListFun;
