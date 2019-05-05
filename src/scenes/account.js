import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import { Redirect } from 'react-router-dom';

import axios from 'axios';

const checkAuth = async (user) => {
	const authToken = sessionStorage.getItem('accessToken')
	return await axios.get('http://127.0.0.1:8080/users/me', {
		headers: {
		'content-type': 'application/json',
		'Authorization': 'Bearer '+authToken
		}
	}).then(function(response) {
    if(response.status === 200){
      user.setState({auth: true})
    }else{
      user.setState({auth: false})
    }
     
    }).catch(error => {user.setState({auth: false})}
    );
}


export default class App extends Component {
  constructor(props){
      super(props)
      this.state = {auth: true}
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  componentWillMount(){
    checkAuth(this)
  }
  render() {
    if (this.state.auth) {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
      	
        <div className="p-5"></div>
        Account
        <Footer history={this.props.history}/>
      </div>
    );
    }else{
      return (
        <div>
          <h2>You are not logged in redirecting.......</h2>
          <Redirect to='/login'/>
        </div>);
    }
  }
}
