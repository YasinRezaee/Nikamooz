import React, { useState } from 'react';

export const AddItemApp = () => {
  const data = ["aabbcc", "ddeeff"];
  const [book, setBook] = useState(data);
const addNew=()=>{
  setBook([...book, "new book"])
}
  return (
    <ul>
      <button onClick={()=>addNew()}>add new item</button>
      {book.map(item => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};
