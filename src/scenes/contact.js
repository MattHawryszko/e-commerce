import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Contact from "../components/contact"

export default class App extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
      	<Contact />
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
