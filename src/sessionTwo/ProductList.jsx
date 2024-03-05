import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
const initialBooks = [
  { id: 101, title: "big bang", price: 20 },
  { id: 102, title: "little lies", price: 20 },
  { id: 103, title: "brave astronut", price: 20 },
];
export const ProductList = () => {
  const [books, setBooks] = useState(initialBooks);
  const removeBook = (id) => {
    const temp= books.filter(q=>q.id !== id)
    setBooks([...temp])
  };
  return (
    <>
      <div className="h3 m-auto"> New Product List</div>
      <br />
      <table className="table table-striped w-75 m-auto">
        <thead className="table-dark">
          <tr>
            <td>Index</td>
            <td>Id</td>
            <td>Title</td>
            <td>price</td>
            <td>status</td>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <button
                  onClick={() => removeBook(book.id)}
                  className="btn btn-warning btn-sm text-white"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr  className="text-danger"/>
      <h3>Card Veiw Mode</h3>
     <div className="row">
     {books.map(item=><ProductCard key={item.id} cardBook={item}/>)}
     </div>
    </>
  );
};
