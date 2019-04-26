import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import FAQ from "../components/faq"

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
      	<FAQ />
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
