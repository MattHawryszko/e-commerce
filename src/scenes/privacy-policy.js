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
          <div className="pt-5"></div>
          <Title class="display-4" dash="dash-yellow" text="Privacy Policy"/>
          <div className="row py-5">
            <p className="text-grey">No privacy policies have been written for this demo website. This website is for demo purposes only and none of the text, images, or products associated with this site should be used for commercial purposes unless provided written consent from the original owners.</p>
            <p className="text-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nam, nobis quos voluptatum voluptatibus a officiis et non consectetur, at, rem ea tempore! Enim placeat sequi dolorum! Quo suscipit nulla sint quod sapiente similique, quibusdam aut recusandae blanditiis unde! Et..</p>
            <p className="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nisi ullam. Quis nulla incidunt id vitae inventore rem, a eius in adipisci ipsum ab, dolores similique sed magnam placeat itaque iure atque perspiciatis culpa expedita. Voluptatem in provident harum voluptates voluptas quis sapiente fuga animi amet minus fugiat, placeat beatae.</p>
          </div>
        </div>
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
