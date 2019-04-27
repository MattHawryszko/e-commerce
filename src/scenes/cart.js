import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Title from "../components/title"

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
        <div className="container nav-padding">
        <Title class="display-3" text="Cart"/>
        </div>
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
