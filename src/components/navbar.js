import React, { Component } from 'react';

import $ from "jquery";

function scrollFunction() {
  if($(window).innerWidth() > 768){
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60 ) {
      document.getElementById("nav-color").style.backgroundColor = "#000";
      document.getElementById("navbar-list1").style.color = "#FFF";
      document.getElementById("navbar-list2").style.color = "#FFF";
      document.getElementById("navbar-title").style.color = "white";
      document.getElementById("navbar").style.position = "relative";
      document.getElementById("nav-top").style.position = "absolute";
      document.getElementById("nav-top").style.display = "none";
      
  
    } else {
      document.getElementById("nav-color").style.backgroundColor = "transparent";
      document.getElementById("navbar-list1").style.color = "#254558";
      document.getElementById("navbar-list2").style.color = "#254558";
      document.getElementById("navbar-title").style.color = "#254558";
      document.getElementById("navbar").style.position = "relative";
      document.getElementById("nav-top").style.position = "relative";
      document.getElementById("nav-top").style.display = "block";
    }
  }

}
window.onscroll = function() {scrollFunction()};


export default class App extends Component {
  
handleEvent = event => {
  const props = this.props;
  if(event.target.id !== "home" && event.target.id !== "navbar-title")
    props.history.push('/'+event.target.id)
  else
    props.history.push('/')
};
componentDidMount(){

}
render() {
  
    return (
      <div className="navbar-padding" id="navbar-padding">
        <div className="modal fade p-0 m-0 w-100" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-bg" role="document">
            <div className="modal-content modal-bg p-0 m-0 ">
            <button type="button" className="close justify-content-end d-flex text-white " data-dismiss="modal" aria-label="Close"><span className="h1" aria-hidden="true">&times;</span></button>
              <div className="modal-body modal-bg p-0 m-0 justify-content-center d-flex">
                <ul>
                  <li id="home" onClick={this.handleEvent} className="text-uppercase" data-dismiss="modal">home</li>
                  <li id="about" onClick={this.handleEvent} className="text-uppercase" data-dismiss="modal">about</li>
                  <li id="shop" onClick={this.handleEvent} className="text-uppercase" data-dismiss="modal">shop</li>
                  <li id="faq" onClick={this.handleEvent} className="text-uppercase" data-dismiss="modal">faq</li>
                  <li id="contact" onClick={this.handleEvent} className="text-uppercase" data-dismiss="modal">contact</li>     
                </ul>
              </div>
            </div>
          </div>
        </div> 
        <div className="fixed-top">
          <div id="top-bar" className="bg-black d-none d-md-block">
            <div id="nav-top" className="container">
              <div className="row justify-content-between py-2">
                <div className="col-9">
                  <small className="text-white">Free Shipping on All Orders Over $75!</small>
                </div>
                <div className="col-3">
                  <a className="p-2 text-white" href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook location-text text-md"></i></a>
                  <a className="p-2 text-white" href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter location-text text-md"></i></a>
                  <a className="p-2 text-white" href="https://plus.google.com/discover" rel="noopener noreferrer" target="_blank"><i className="fab fa-google-plus location-text text-md"></i></a>
                  <a className="p-2 text-white" href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram location-text text-md"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-color">
            <div className="container">
              <nav id="navbar" className="navbar navbar-expand-lg justify-content-between p-0">
                <h2 id="home" onClick={this.handleEvent} className="title-font pl-3"><span className="text-yellow">e</span> <span id="navbar-title">Shop</span></h2>

                <ul id="navbar-list1" className="d-flex d-md-none p-0 m-0">
                  <li id="cart" onClick={this.handleEvent} className="text-uppercase font-weight-light pr-1"><i id="cart" class="pt-1 fa-lg pr-1 fas fa-shopping-cart"></i>0</li>
                  <li id="wishlist" onClick={this.handleEvent} className="text-uppercase font-weight-light px-1"><i id="wishlist" class="pt-1 pr-1 fa-lg fas fa-heart"></i>0</li>
                  <li id="cart" onClick={this.handleEvent} className="text-uppercase px-1 "><i id="account" class="pt-1 fa-lg fas fa-user-circle"></i></li>
                  <li role="button" data-toggle="modal" data-target="#exampleModal"><i className="pt-1 pr-1 fas fa-bars fa-lg"></i></li>
                </ul>
                
                <ul id="navbar-list2" className="d-none d-md-flex p-0 m-0">
                  <li id="home" onClick={this.handleEvent} className="text-uppercase">home</li>
                  <li id="about" onClick={this.handleEvent} className="text-uppercase">about</li>
                  <li id="shop" onClick={this.handleEvent} className="text-uppercase">shop</li>
                  <li id="faq" onClick={this.handleEvent} className="text-uppercase">faq</li>
                  <li id="contact" onClick={this.handleEvent} className="text-uppercase">contact</li>
                  <li id="cart" onClick={this.handleEvent} className="text-uppercase font-weight-light pr-1"><i id="cart" class="pt-1 fa-lg pr-1 fas fa-shopping-cart"></i>0</li>
                  <li id="wishlist" onClick={this.handleEvent} className="text-uppercase font-weight-light px-1"><i id="wishlist" class="pt-1 pr-1 fa-lg fas fa-heart"></i>0</li>
                  <li id="cart" onClick={this.handleEvent} className="text-uppercase px-1 "><i id="account" class="pt-1 fa-lg fas fa-user-circle"></i></li>
                </ul>
                
              </nav>    
            </div>
          </div>
          
        </div>
      </div>
      );
  }
};

