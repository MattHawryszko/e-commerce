import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Title from "../components/title"

import About from "../components/about"
import Card from "../components/Card"

import SelfImage from "../img/self.jpg"
import Chain from "../img/chain.png"

export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
        <About />
        <Title text="Our Team" />
        <div className="container">
          <div className="row pt-5">
            <Card img={SelfImage} text="Matt Hawryszko" text2="Developer" />
            <Card img={SelfImage} text="Matt Hawryszko" text2="Developer"/>
            <Card img={SelfImage} text="Matt Hawryszko" text2="Developer"/>
          </div>
        </div>
        <Title text="We think everyone should have access to quality clothes at an affordable price" />
        <div className="container">
          <div className="row pt-5">
            <Card img={Chain} title="BRANDING" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor placeat et mollitia quam ipsa porro animi eos. Dolorum, consequuntur." />
            <Card img={Chain} title="MARKETING" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor placeat et mollitia quam ipsa porro animi eos. Dolorum, consequuntur." />
            <Card img={Chain} title="STRATEGY" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor placeat et mollitia quam ipsa porro animi eos. Dolorum, consequuntur." />
          </div>
        </div>


        <Footer history={this.props.history}/>
      </div>
    );
  }
}
