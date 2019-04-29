import React, { Component } from 'react';

import Quantity from "../components/quantity"

export default class App extends Component {
render() {
    return (
      <div className="col-12 col-xl-6 px-5">
        <small className="text-uppercase text-grey">{"Home / " + this.props.categories[0] + " / "+this.props.categories[1]}</small>
        

        <h1 className="font-weight-bold py-3">{this.props.product.productname}</h1>
        <h5 className="text-orange font-weight-bold">${this.props.product.price}</h5>

        <p className="text-grey py-3">{this.props.product.description}</p>
        <div className="row">
          <Quantity />
          <li id="contact" onClick={this.handleEvent} class="btn btn--sm btn-orange text-white text-uppercase" role="button">Add to cart</li>
        </div>
        
        <p className="m-0"><small className="text-uppercase text-grey">{"Tags : " + this.props.product.tags}</small></p>
        <p><small className="text-uppercase text-grey">{"Categorys : " + this.props.categories[0] + ", "+this.props.categories[1]}</small></p>
      </div>

      );
  }
};

