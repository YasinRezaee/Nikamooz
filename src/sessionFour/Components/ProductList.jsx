import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductList = ({ data, editMode, remove }) => {
  const navigate = useNavigate();
  return (
    <table className="table">
      <thead className="table-dark">
        <tr className="rounded-top">
          <th>کد</th>
          <th>عنوان</th>
          <th>گروه</th>
          <th>قیمت</th>
          <th>مدیریت</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className={item.editMode ? "table-warning" : ""}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.CategoryName}</td>
            <td>{item.price}</td>
            <td>
              <button
                type="button"
                className="btn btn-sm btn-warning mx-2"
                onClick={() => editMode(item.id)}
              >
                ویرایش{" "}
              </button>
              <button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={() => {
                  navigate(`/product/:${item.id}`);
                }}
              >
                مشاهده Navigate{" "}
              </button>
              <Link
                to={`/product/info?id=${item.id}&title=${item.title}`}
                className="btn btn-sm btn-dark  mx-2"
              >
                querry string
              </Link>

              <button
                type="button"
                className="btn btn-sm btn-danger "
                onClick={() => remove(item.id)}
              >
                حذف
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
