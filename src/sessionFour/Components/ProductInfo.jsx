import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
const ProductInfo = ({ categories, product, save }) => {
  console.log("categories", categories)
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { ...product } });
  const submitForm = (data) => {
    console.log(data);
    save(data);
  };
  useEffect(() => {
    reset(product);
    console.log(product)
  }, [product, reset]);


  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input type="hidden" name="id" {...register("id")}></input>
      {/* <label for="id" className="productId my-3">
        کد محصول
      </label>
      <input
        type="text"
        className="form-control"
        {...register("id", { required: true })}
      />
      {errors.id && (
        <p role="alert" className="text-danger">
          لطفا کد محصول را وارد کنید
        </p>
      )} */}

      <label for="title" className="productTitle my-3">
        عنوان محصول
      </label>
      <input
        type="text"
        className="form-control"
        {...register("title", { required: true, minLength: 5 })}
      />
      {errors.title && (
        <p role="alert" className="text-danger">
          لطفا نام محصول را وارد کنید
        </p>
      )}
      {errors.title && errors.title.type === "minLength" && (
        <p role="alert" className="text-danger">
          حداقل 5 کاراکتر نیاز است
        </p>
      )}

      <div className="form-group">
        <label for="title" className=" my-3">
          گروه محصول
        </label>
        <select
          className="form-control"
          {...register("categoryId", { required: true })}
        >
          <option value="">گروه محصول مورد نظر را انتخاب کنید</option>
          {categories.map((item) => (
            <option value={item.id}>{item.title}</option>
          ))}
        </select>
        {errors.categoryId && (
          <p role="alert" className="text-danger">
            لطفا عنوان محصول را وارد کنید
          </p>
        )}
      </div>
      <label for="price" className="productTitle my-3">
        قیمت
      </label>
      <input
        type="number"
        className="form-control"
        {...register("price", { required: true })}
      />
      {errors.price && (
        <p role="alert" className="text-danger">
          لطفا قیمت محصول را وارد کنید
        </p>
      )}
      <button type="submit" className="btn btn-success  my-3">
        ذخیره
      </button>
    </form>
  );
};
ProductInfo.propTypes={
  product: PropTypes.object
}
export default ProductInfo;
