import React from "react";

const Loading = () => {
  return (
    <div className="d-flex my-2 align-items-center bg-light">
      <span
        className="spinner-border text-danger"
        role="status"
        aria-hidden="true"
      ></span>
      <span className="sr-only text-danger">در حال پردازش ...</span>
    </div>
  );
};

export default Loading;
