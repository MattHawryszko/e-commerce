import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Title from "../components/title"

import About from "../components/about"
import Card from "../components/Card"


import SelfImage from "../img/self.jpg"
import Chain from "../img/chain.png"
import Box from "../img/box.png"
import Target from "../img/target.png"

export default class App extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
        <About />
        <Title text="Our Team" />
        <div className="container">
          <div className="row pt-5 justify-content-center">
            <Card img={SelfImage} text="Matt Hawryszko" text2="Developer" />
            <Card img={SelfImage} text="Matt Hawryszko" text2="Developer"/>
            <Card img={SelfImage} text="Matt Hawryszko" text2="Developer"/>
          </div>
        </div>
        <Title text="We think everyone should have access to quality clothes at an affordable price" class="d-none d-md-block"/>
        <Title text="What we do" class="d-block d-md-none"/>
        <div className="container pb-5">
          <div className="row pt-5 justify-content-center">
            <Card img={Chain} title="BRANDING" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor placeat et mollitia quam ipsa porro animi eos. Dolorum, consequuntur." />
            <Card img={Target} title="MARKETING" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor placeat et mollitia quam ipsa porro animi eos. Dolorum, consequuntur." />
            <Card img={Box} title="STRATEGY" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor placeat et mollitia quam ipsa porro animi eos. Dolorum, consequuntur." />
          </div>
        </div>

        <Title history={this.props.history} btnText="Get in touch" url="/contact" text="Interested In Working Together?" bg="bg-danger" class="text-white"/>
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
