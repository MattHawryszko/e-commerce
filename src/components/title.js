import React, { Component } from 'react';
export default class App extends Component {
componentDidMount(){

}
render() {
  
    return (
      <div className="">

          <div className="row justify-content-center">
            <div className="col-6">
              <h1 className={"pt-5 text-center font-weight-bold "+this.props.class}>{this.props.text}</h1>
            </div>
          </div>
          <div className="row pt-3 justify-content-center">
            <div className={this.props.dash}></div>
          </div>
          

      </div>

      );
  }
};

