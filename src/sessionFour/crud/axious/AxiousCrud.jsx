import React from "react";
import TodosCombo from "./TodosCombo";
import TableOfTodos from "./TableOfTodos";
const AxiousCrud = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>مدیریت داده ها با Axios</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            <TodosCombo />
          </div>
          <div className="col-9">
            <TableOfTodos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiousCrud;
