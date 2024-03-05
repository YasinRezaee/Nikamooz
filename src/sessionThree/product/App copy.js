// import { ProductList } from "./sessionTwo/ProductList";
// import ProductListClassComponent from "./sessionTwo/ProductListClassComponent";

import React, { useState } from "react";
import CostumerListCls from "../costumer/CostumerListCls";
import ProductListFun from "./ProductListFun";
import Counter from "../Counter";

function App() {
  const [showCompo, setShowCompo] = useState(true);
  const [count, setCount] = useState(55);
  return (
    <>
      <button
        className="mx-3 my-4 btn btn-info text-white bg-danger  "
        onClick={() => setShowCompo(true)}
      >
        Show Product List
      </button>
      <button
        className="mx-3 my-4 btn btn-info text-white bg-warning "
        onClick={() => setShowCompo(false)}
      >
        Show Costumer List
      </button>
      {showCompo ? <ProductListFun /> : <CostumerListCls />}
      <label>
        counter value:{" "}
        <input onChange={(event) => setCount(parseInt(event.target.value))} />
      </label>
      <Counter count={count} />
    </>
  );
}

export default App;
