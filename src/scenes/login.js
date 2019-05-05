import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Title from "../components/title"

export default class App extends Component {
  handleSubmit = event => {
    
    event.preventDefault(); // Let's stop this event.
    event.stopPropagation(); // Really this time.
    const props = this.props;
    const user = JSON.stringify(this.state);
  
  
    axios.post('http://127.0.0.1:8080/users/login',{email:this.state.email, password: this.state.password})
    .then(function(response) {
      //console.log(response.data.token)
      if(response.status === 400){
        throw new Error()
        console.log("Error")
      }else{
        console.log(response)
        return response; 
      }
       
      })
    .then(function(data) {
      if(data){
        if(!window.sessionStorage.wishlistId){
          window.sessionStorage.setItem('wishlistId', data.data.user.wishlistId)
        }
        if(!window.sessionStorage.cartId){
          window.sessionStorage.setItem('cartId', data.data.user.cartId)
        }
        window.sessionStorage.setItem('accessToken', data.data.token)
        
        props.history.push('/account')
        window.location.reload();
      }

      
    }).catch(error => console.error('Error:', error));
  
    
     
      
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
      	
        <div className="py-5"></div>
        <Title text="Login" class="text-center" />
        <div className="container d-flex justify-content-center">
          <div id="formContent" className="col-lg-5 col-md-6 col-12 pb-5">
            <form className="justify-content-center row">
              <input type="text" onChange={e => this.setState({email: e.target.value})} id="login" name="login" placeholder="username/email" />
              <input type="text" onChange={e => this.setState({password: e.target.value})} id="password"name="login" placeholder="password" />
              <input type="submit" onClick={this.handleSubmit} value="Log In" />
            </form>
          </div>
        </div>
        <Footer history={this.props.history}/>
      </div>
      
    );
  }
}
