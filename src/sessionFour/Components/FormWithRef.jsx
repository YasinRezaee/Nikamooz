import React, { useRef, useState } from "react";

const FormWithRef = () => {
  const [items, setItems] = useState([]);
  const inputRef = useRef();
  const addToList = () => {
    if (inputRef.current.value === "") {
      alert("مقدار را وارد کنید");
    } else {
      const temp = inputRef.current.value;
      setItems([...items, temp]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>Form with Ref</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <label>نام گروه</label>
              <input type="text" ref={inputRef} />
              <button onClick={addToList} className="btn btn-sm btn-info mx-2">
                به لیست اضافه شود
              </button>
            </div>
            <hr className="m-3" />
            <div>
              <h4>لیست گروه ها</h4>
              <ol>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWithRef;
