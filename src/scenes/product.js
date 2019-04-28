import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import ProductImages from "../components/productImages"
import ProductInfo from "../components/productInfo"

const axios = require('axios')

export default class App extends Component {
  constructor(props){
      
    super(props)
    this.state = {product: [], categories: [], images: []}
}
  async componentWillMount(){
    const that = this
    axios.get('http://127.0.0.1:8080/product/'+this.props.match.params.id)
    .then(function(response) {
      //console.log(response.data.token)
      if(response.status === 400){
        throw new Error()
      }else{
        console.log(response.data)
        that.setState({product: response.data})
        that.setState({categories: [response.data.categories[0], response.data.categories[1]]})
        response.data.images.forEach(element => {
          let images = [...that.state.images];
          images.push(element)
          that.setState({images: images})
          
          
        });
      }
       
      })
  }
  render() {
    return (
      <div className="">
        <Navbar history={this.props.history} />
      	<div className="container py-5">
          <div className="pt-5 row">
            <ProductImages images={this.state.images}/>
            <ProductInfo product={this.state.product} categories={this.state.categories} />
          </div>
        </div>

        <Footer history={this.props.history}/>
      </div>
    );
  }
}
