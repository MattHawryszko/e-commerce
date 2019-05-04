import React, { Component } from 'react';

import axios from 'axios';

export default class App extends Component {
  removeItem = event => {
    var that = this;
    axios.delete('http://127.0.0.1:8080/wishlist/'+window.sessionStorage.getItem('wishlistId'),{item: this.props.itemId})
    .then(function(response) {
      that.setState({isItemOnWishlist: false})
       
      }).catch(error => console.error('Error:', error));
  };
  addItem = event => {
  var that = this;
  axios.patch('http://127.0.0.1:8080/wishlist/'+window.sessionStorage.getItem('wishlistId'),{item: this.props.itemId})
  .then(function(response) {
    that.setState({isItemOnWishlist: true})
     
    }).catch(error => console.error('Error:', error));
};
constructor(props){
      
  super(props)
  this.state = {wishlist: [], isItemOnWishlist: Boolean}
}

async componentWillMount(){
  
  const that = this

  await axios.get('http://127.0.0.1:8080/wishlist/'+window.sessionStorage.getItem('wishlistId'))
  .then(async function(response) {
    if(response.status === 400){
      throw new Error()
    }else{
      var wishlist = new Array();
      await response.data.items.forEach(element => {
        wishlist.push(element.item)
      })
      that.setState({wishlist: wishlist})
    }
  })
  if(this.state.wishlist.includes(this.props.itemId)){
    this.setState({isItemOnWishlist: true})
  }else{
    this.setState({isItemOnWishlist: false})
  }
    console.log(this.props.itemId)
    console.log(this.state.wishlist)
  
}
render() {
  if(this.state.isItemOnWishlist){
    return (
      <div>
        <i onClick={this.removeItem} class="fas fa-heart"></i>
        
      </div>
      );
  }else{
    return (
      <div>
        <i onClick={this.addItem} class="far fa-heart"></i>
        
      </div>
      );
  }

  }
};

