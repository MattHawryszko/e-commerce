import React, { Component } from 'react';

import Title from "./title"

export default class App extends Component {
render() {
    const isTitle = this.props.title;
    let title;

    if(isTitle){
      title = <Title class="h3" text={this.props.title}/>;
    }
    return (
      <div className="wow slideInLeft faster col-lg-4 col-md-6 pb-2">
        {title}
        <img src={this.props.img} alt="card-img" className="img-fluid"/>
        <p className="text-gray text-center pt-5 pb-0 mb-0">{this.props.text}</p>
        <p className="text-gray text-center p-0 m-0">{this.props.text2}</p>
      </div>

      );
  }
};

