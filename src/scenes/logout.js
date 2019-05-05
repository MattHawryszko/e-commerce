import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import { Redirect } from 'react-router-dom';

import axios from 'axios';


export default class App extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
    const authToken = sessionStorage.getItem('accessToken')
    axios.post('http://127.0.0.1:8080/users/logout', {},{
    
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer '+authToken
    },
  }).then(function(response) {
    if(response.status === 200){
      window.sessionStorage.setItem('accessToken', null)
      window.location = '/';
    }else{
      window.sessionStorage.setItem('accessToken', null)
      window.location = '/';
      throw new Error('Could not logout user')
    }
    })
  .catch(error => {
    window.sessionStorage.setItem('accessToken', null)
    window.location = '/';
  });
      
  }
  render() {

    return (
      <div className="logout">
      Logging out redirecting..........
      </div>
      );
    
  }
}
