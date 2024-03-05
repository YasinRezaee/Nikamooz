import React, { Component } from "react";

export default class ProductListClassComponent extends Component {
  constructor(props) {
    //فراخوانی سازنده کلاس پدر
    super(props);
    this.state = {
      books: [
        { id: 2001, title: "boat on the water", price: 33 },
        { id: 2002, title: "java script techniques", price: 44 },
        { id: 2003, title: "top notch fun A", price: 55 },
        { id: 2004, title: "little lies blown up", price: 66 },
      ],
      comics:[
        {id:12, title: "bat man"},
        {id:14, title: "spider man"},
      ]
    };
    this.removeBook = (id) => {
        const temp= this.state.books.filter(book => book.id !== id)
        this.setState({...this.state, books:[...temp]})
        // بخش اول (...this.state)ست استیت یعنی بزار بقیه پارامت ها باشن 
        // و بخش دو (books:[...temp])یعنی بیا اون ابجکت رو اوررایت کت
    };
  }
  render() {
    return (
      <div>
        <h3>This is Product List in a Class Component</h3>
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
            {this.state.books.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.price}</td>
                <td>
                  <button
                    onClick={() => this.removeBook(book.id)}
                    className="btn btn-warning btn-sm text-white"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
