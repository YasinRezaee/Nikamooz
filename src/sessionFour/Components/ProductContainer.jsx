//استفاده از hook-form-react در فرم ها
import React, { useState } from "react";
import "../GlobalData/index-form-style.css";
import ProductList from "./ProductList";
import ProductInfo from "./ProductInfo";
import { products, categories } from "../GlobalData/data";
import { v4 as uuidv4 } from "uuid";
import PageTitle from "./costumComponents/PageTitle";
import swal from "sweetalert";
const ProductContainer = () => {
  const [items, setItems] = useState(products);
  const [selectedItem, setSelectedItem] = useState({});
  //*******************editMode******************************* */
  const setEditMode = (id) => {
    const temp = [...items];
    const index = temp.findIndex((q) => q.id === id);
    temp.forEach((q) => (q.editMode = false));
    temp[index].editMode = true;
    setItems([...temp]);
    setSelectedItem(temp[index]);
  };
  //******************save New Item********************* */
  const saveItem = (item) => {
    const category = categories.find((q) => q.id === item.categoryId);
    item = { ...item, categoryName: category.title, editMode: false };
    if (item.id !== "") {
      //Edit Item
      const temp = [...items];
      const index = temp.findIndex((q) => q.id === item.id);
      temp[index] = item;
      setItems([...temp]);
    } else {
      //add item
      item.id = uuidv4();
      const temp = [...items, item];
      setItems([...temp]);
    }
    setSelectedItem({
      id: "",
      title: "",
      categoryId: "",
      price: "",
    });
  };
  const removeItem = (id) => {
    swal({
      title: "آیا مطمعن هستید؟",
      text: "در صورت حذف قابل بازیابی نمی باشد",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      buttons: ["انصراف", "حذف"],
    }).then((willDelete) => {
      if (willDelete) {
        setItems([...items.filter((q) => q.id !== id)]);
      }
    });
  };

  return (
    <>
      <PageTitle title="لیست محصولات" discription="توضیحات 160 کاراکتری " />
      <div className="card">
        <div className="card-header bg-info text-white font-weight-bold">
          مدیریت محصولات
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <ProductList
                data={items}
                editMode={setEditMode}
                remove={removeItem}
              />
            </div>
            <div className="col-md-3">
              <ProductInfo
                save={saveItem}
                categories={categories}
                product={selectedItem}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
