import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"
const axios = require('axios')
export default class App extends Component {


uploadImage = event => { 
  const files = document.getElementById('INPUT_TAG').files
  const formData = new FormData()
  formData.append('image', files[0])
  axios.post('http://127.0.0.1:8080/images', formData)
  console.log('testing')
}
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
      	Shop
        <div className="p-5"></div>
        <input type="file" id="INPUT_TAG"/>
        <button onClick={this.uploadImage}>call uploadImage()</button>
        <img src="http://127.0.0.1:8080/images/5cc5ea9aafb5bf370a1d7cad"></img>
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
