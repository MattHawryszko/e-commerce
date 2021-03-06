import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import ProductImages from "../components/productImages"
import ProductInfo from "../components/productInfo"
import ProductReviews from "../components/productReviews"

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
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="">
        <Navbar history={this.props.history} />
      	<div className="container py-5">
          <div className="pt-5 row flex-xl-row-reverse ">
            
            <ProductInfo product={this.state.product} categories={this.state.categories} />
            <ProductImages images={this.state.images}/>
          </div>
        </div>
        <ProductReviews description={this.state.product.description} />
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
