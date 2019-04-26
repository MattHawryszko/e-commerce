import React, { Component } from 'react';

import Title from "../components/title"


export default class App extends Component {

componentDidMount(){

}

render() {
  
    return (
      <div className="">
        <div className="container nav-padding">
          <div className="pt-5"></div>
          <Title dash="dash-yellow" text="Get In Touch!"/>
          <div className="row pb-5 pt-5">
          <div className="col-12 col-md-8 px-5">
            <ul className="text-light-grey">
              <li className="d-flex py-2 pt-5">
              <div className="content">
                <p className="p-0 m-0 text-black-50 font-weight-bold">Phone:</p>
                <a href="tel:289-995-2222"><p className="text-black-50 p-0 m-0">(289) 995-2222</p></a>
              </div>
            </li>
            <li className="d-flex py-2">

              <div className="content">
                <p className="p-0 m-0 text-black-50 font-weight-bold">Email:</p>
                <a href="mailto:contact@eshop.com"><p className="p-0 m-0 text-black-50">contact@eshop.com</p></a>
                
              </div>
            </li>
            <li className="d-flex py-2">

              <div className="content">
                <p className="p-0 m-0 text-black-50 font-weight-bold">Address</p>
                <a href="https://goo.gl/maps/CCkTNf9zQf92"><p className="text-black-50 p-0 m-0">253 W 28th St, New York, NY 10001, USA</p></a>
              </div>
            </li>
          </ul>
          </div>
          <div className="col-12 col-md-4 p-0">
            <h3 className="pt-2 pb-3 text-center font-weight-bold">Hour's of operation</h3>
            <ul className="pb-2 no-bullets">
              <li className="text-grey text-center">Monday	9:30 am	- 9:30 pm</li>
              <li className="text-grey text-center">Tuesday	9:30 am	- 9:30 pm</li>
              <li className="text-grey text-center">Wednesday	9:30 am	- 9:30 pm</li>
              <li className="text-grey text-center">Thursday	9:30 am	- 9:30 pm</li>
              <li className="text-grey text-center">Friday	9:30 am	- 9:30 pm</li>
              <li className="text-grey text-center">Saturday	9:30 am	- 9:30 pm</li>
              <li className="text-grey text-center">Sunday	9:30 am	- 9:30 pm</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="row maps-bg m-0">
          <div className="col-12 m-0 p-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.624358855394!2d-73.99778968459397!3d40.748290479328034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9fe464e625baa5e6!2sADI+Global+Distribution!5e0!3m2!1sen!2sca!4v1555262118448!5m2!1sen!2sca" width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
            <div className="gmap"></div>
          </div> 
        </div>
      </div>

      );
  }
};

