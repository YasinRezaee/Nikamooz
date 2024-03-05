import React, { Component } from "react";
import CostumerCardCls from "./CostumerCardCls";

export default class CostumerListCls extends Component {
  //Component Life Cycle
  componentDidMount(){
//زمانی که کامپمننت ایجاد شد
console.log(" CostumerListCls componentDidMount")
  }
  componentDidUpdate(){
//زمانی که کامپوننت بروزرسانی شد
console.log(" CostumerListCls componentDidUpdate")
  }
  componentWillUnmount(){
    //زمانی که کامپوننت در حال از بین رفتن می باشد
    console.log(" CostumerListCls componentWillUnmount")
  }
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        { id: 401, title: "Red", code: 25 },
        { id: 402, title: "Brown", code: 30 },
        { id: 403, title: "Green", code: 35 },
      ],
    };
  }
      removeList = (id) => {
      if(  window.confirm("Are You Sure???")){
        const updatedList = this.state.lists.filter((item) => item.id !== id);
        this.setState({lists: updatedList})
      }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>These Itemes are displayed by using Class component</h4>
            {/* <table className="table table-striped border">
              <thead className="table-success h5">
                <tr>
                  <td>Id</td>
                  <td>Title</td>
                  <td>Code</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {this.state.lists.map((list) => (
                  <tr key={list.id}>
                    <td>{list.id}</td>
                    <td>{list.title}</td>
                    <td>{list.code}</td>
                    <td>
                      <button
                        onClick={() => this.removeList(list.id)}
                        className="btn btn-sm btn-warning"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
            {this.state.lists.map((card)=>
             <CostumerCardCls cards={card} key={card.id} removeCard={this.removeList}/>)}
          </div>
          </div>
        </div>
      </div>
    );
  }
}
