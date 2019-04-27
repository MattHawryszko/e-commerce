import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
      	Shop
        <div className="p-5"></div>
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
