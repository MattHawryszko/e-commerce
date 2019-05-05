import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Title from "../components/title"

export default class App extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
      	
        <div className="py-5"></div>
        <Title text="Register" class="text-center" />
        <div className="container d-flex justify-content-center">
          <div id="formContent" className="col-lg-5 col-md-6 col-12  pb-5">
            <form className="justify-content-center row">
              <input type="text" id="username" name="login" placeholder="Username" />
              <input type="email" id="email" name="login" placeholder="Email" />
              <div className="d-flex px-4">
                <input type="password" id="password" name="login" placeholder="Password" />
                <input type="password" id="confirmPassword" name="login" placeholder="Confirm Password" />
              </div>
              
              <div className="d-flex px-4">
                <input type="text" id="firstName" name="login" placeholder="First name" />
                <input type="text" id="lastName" name="login" placeholder="Last name" />
              </div>
              
              <input type="text" id="postalCode" name="login" placeholder="postal code" />
              <input type="text" id="province" name="login" placeholder="province" />
              <input type="text" id="city" name="login" placeholder="city" />
              <input type="text" id="street" name="login" placeholder="street" />
              <input type="text" id="country" name="login" placeholder="country" />
              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
