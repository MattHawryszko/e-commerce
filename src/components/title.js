import React, { Component } from 'react';
export default class App extends Component {
componentDidMount(){

}
render() {
  
    return (
      <div className="">

          <div className="row justify-content-center">
            <h1 className="pt-5 text-center font-weight-bold display-4">{this.props.text}</h1>
          </div>
          <div className="row pt-3 justify-content-center">
              
              <div className={this.props.dash}></div>
          </div>
          

      </div>

      );
  }
};

