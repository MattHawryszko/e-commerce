import React, { Component } from 'react';

import Title from "../components/title"

export default class App extends Component {
render() {
    return (
      <div className="col-6 px-5">
        <small className="text-uppercase text-grey">{"Home / " + this.props.categories[0] + " / "+this.props.categories[1]}</small>
        

        <h1 className="font-weight-bold py-3">{this.props.product.productname}</h1>
        <h5 className="text-orange font-weight-bold">${this.props.product.price}</h5>

        <p className="text-grey py-3">{this.props.product.description}</p>

        <p className="m-0"><small className="text-uppercase text-grey">{"Tags : " + this.props.product.tags}</small></p>
        <p><small className="text-uppercase text-grey">{"Categorys : " + this.props.categories[0] + ", "+this.props.categories[1]}</small></p>
      </div>

      );
  }
};

