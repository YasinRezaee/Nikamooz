// form هااستفاده از
//formData روش استفاده از
//مزیتش نسبت به آنچینج اینه که تون داستان آپدیت لحظه به لحظه رو نداریم
import React from "react";
import PageTitle from "./Components/costumComponents/PageTitle";

const FormDataSample = () => {
  const submit = (e) => {
    e.preventDefault(); //جهت جلوگیری از پست بک
    const form = new FormData(e.target);
    console.log(form.get("firstName"));
    console.log(form.get("lastName"));
    console.log(form);
  };
  return (
    <>
      <PageTitle title=" نمونه فرم دیتا" discription="توضیحات 160 کاراکتری " />
      <div className="d-flex flex-column justify-content-center align-item-center">
        <h1>این یک فرم است که از روش فرم دیتا در آن استفاده شده است</h1>
        <form onSubmit={submit}>
          <span className="h4">first Name:</span>{" "}
          <input className="form-control  w-50" type="text" name="firstName" />
          <br />
          <span className="h4">last Name:</span>{" "}
          <input className="form-control w-50" type="text" name="lastName" />
          <br />
          <button className="btn btn-primary " type="submit">
            {" "}
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default FormDataSample;
