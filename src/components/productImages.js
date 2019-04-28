import React, { Component } from 'react';

import Title from "../components/title"

export default class App extends Component {
render() {
    return (
      <div className="row col-6">
        <div className="col-3">
        {this.props.images.map(function (element, index){
        return (
          <div>
            <img id={'productImg'+index} src={"http://127.0.0.1:8080/images/"+element} className="ml-5 img-fluid col1-thumbnail" alt="product"/>
            <br />
            <br />
          </div>
          );})}
        </div>
        <div className="col-9">
          <img id={'productImg0'} src={"http://127.0.0.1:8080/images/"+this.props.images[0]} className="ml-2 img-fluid" alt="product"/>
        </div>  
      </div>

      );
  }
};

