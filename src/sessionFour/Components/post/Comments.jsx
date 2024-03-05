import React from "react";

const Comments = ({ info }) => {
  return (
    <div className="col-md-4 my-2">
      <div className="card ">
        <div className="card-header bg-info text-nowrap overflow-hidden text-truncate">{info.title}</div>
        <div className="card-body">{info.body}</div>
        <div className="card-footer bg-success">
          <button className="btn btn-warning btn-sm"> مدیریت</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
