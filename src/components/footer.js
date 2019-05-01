import React, { Component } from 'react';

export default class App extends Component {
handleEvent = event => {
  const props = this.props;
  if(event.target.id != "home")
    props.history.push('/'+event.target.id)
  else
    props.history.push('/')
};
render() {
    return (

<footer className="page-footer font-small bg-dark pt-4">
    <div className="container text-center text-md-left">
      <div className="row">
        <div className="col-lg-3 mx-auto">
          <h2 id="home" onClick={this.handleEvent} className="pointer-cursor"><span className="text-yellow">e</span> <span className="text-white">Shop</span></h2>
          <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem error repellendus aspernatur laboriosam aliquid aperiam, doloribus, libero provident incidunt repudiandae tempore inventore numquam quaerat ipsam modi laborum fugit nulla magnam!</p>
        </div>
      
        <div className="col-lg-4 mx-auto">
          <h5 className="font-weight-bold text-uppercase text-grey mt-3 mb-4"> Usefull Pages</h5>
          <div className="row">
            
            <ul className="list-unstyled pointer-cursor col-6">
              <li id="home" onClick={this.handleEvent} className="text-white">Home</li>
              <li id="about" onClick={this.handleEvent} className="text-white">About Us</li>
              <li id="contact" onClick={this.handleEvent} className="text-white">Contact</li>
              <li id="faq" onClick={this.handleEvent} className="text-white">FAQ</li>
            </ul>
            <ul className="list-unstyled pointer-cursor col-6">
              <li id="login" onClick={this.handleEvent} className="text-white">Login</li>
              <li id="register" onClick={this.handleEvent} className="text-white">Register</li>
              <li id="terms-and-conditions" onClick={this.handleEvent} className="text-white">Terms And Conditions</li>
              <li id="privacy-policy" onClick={this.handleEvent} className="text-white">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 pb-5">
            <p className="text-white">Connect with us</p>
            <a className="p-2 text-white" href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook location-text text-md"></i></a>
            <a className="p-2 text-white" href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter location-text text-md"></i></a>
            <a className="p-2 text-white" href="https://plus.google.com/discover" rel="noopener noreferrer" target="_blank"><i className="fab fa-google-plus location-text text-md"></i></a>
            <a className="p-2 text-white" href="https://www.skype.com/en/" rel="noopener noreferrer" target="_blank"><i className="fab fa-skype location-text text-md"></i></a>
            <p className="pt-2 text-white">Sign up to our newsletter</p>
            <p className="text-grey">Subscribe to our newsletter to recive updates on the latest projects</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter email" aria-label="Enter email" aria-describedby="basic-addon2" />
              <div className="input-group-append pl-2">
                <button className="btn btn-outline-secondary" type="button">Subscribe</button>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="footer-copyright bg-darker text-center py-3">
    <span className="text-white">Crafted with <i className="fas fa-heart text-danger"></i> by <a className="text-white" href="https://github.com/MattHawryszko">MattHawryszko</a></span>
    </div>
</footer>

      );
  }
};

