import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import FAQ from "../components/faq"
import Title from "../components/title"

export default class App extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
      	<FAQ />
        <div className="p-5"></div>
        <Title history={this.props.history} url="/contact" text="Have More Questions?" btnText="Get in touch" bg="bg-danger" class="text-white"/>
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
