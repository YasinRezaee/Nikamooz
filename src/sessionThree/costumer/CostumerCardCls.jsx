import React, { Component } from "react";

export default class CostumerCardCls extends Component {
  render() {
    
    return (
      <div className="col">
        <div className="card">
          <div className="card-header h5 bg-primary text-warning">Product</div>
          <div className="card-body">
            <h4>
              <span className="text-danger">Card Id: </span>
              {this.props.cards.id}
            </h4>
            <h5>
              <span className="text-danger">Card Title: </span>
              {this.props.cards.title}
            </h5>
            <h6>
              <span className="text-danger">Card Price: </span>
              {this.props.cards.code}
            </h6>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-sm btn-warning"
              onClick={() => this.props.removeCard(this.props.cards.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}
