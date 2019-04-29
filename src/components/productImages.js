import React, { Component } from 'react';

import Title from "../components/title"

export default class App extends Component {
render() {
    return (
      <div className="row col-12 col-xl-6 flex-sm-row-reverse ">
        <div className="col-sm-9 ">
          <img id={'productImg0'} src={"http://127.0.0.1:8080/images/"+this.props.images[0]} className="ml-2 img-fluid" alt="product"/>
        </div>  

        <div className="col-sm-3 d-flex d-sm-block ">
        {this.props.images.map(function (element, index){
        return (
          <div className="">
            <img id={'productImg'+index} src={"http://127.0.0.1:8080/images/"+element} className="mt-3 mt-sm-0 ml-lg-5 ml-2 ml-xl-2 img-fluid col1-thumbnail" alt="product"/>
            <br />
            <br />
          </div>
          );})}
        </div>

      </div>

      );
  }
};

