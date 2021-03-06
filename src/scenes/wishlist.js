import React, { Component } from 'react';

import axios from 'axios';

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import Title from "../components/title";
import ToggleItemWishlist from "../components/toggleItemOnWishlist"

const delay = ms => new Promise(res => setTimeout(res, ms));

export default class App extends Component {
  constructor(props){
      
    super(props)
    this.handleEvent = this.handleEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.state = {products: [[]], wishlist: [], images: []}

}
//this part Will remove items from the wishlist
removeEvent(event) {
  const id = event.target.id
  
  try{
    document.getElementById("li-"+id).classList.add("animated");
    document.getElementById("li-"+id).classList.add("bounceOutRight");
    delay(600).finally(()=>{
      var lis = document.getElementById('list')
      document.getElementById("li-"+id).remove()
      
      console.log(lis.getElementsByTagName('li').length)
      if(lis.getElementsByTagName('li').length === 0){
        this.setState({hasItems: false})
      }
    })

  }catch{
    
  }

};
//this part of the code will handle the click of the item and redirect you to the item
handleEvent(event ,id) {
  const props = this.props;
  props.history.push('/product/'+event.target.id)
};


  async componentWillMount(){
    
    const that = this
    // in this part we will check with the api for items on the wishlist and add them to the state of the react app
    await axios.get('http://127.0.0.1:8080/wishlist/'+window.sessionStorage.getItem('wishlistId'))
    .then(async function(response) {
      if(response.status === 400){
        throw new Error()
      }else{
        console.log()
        await response.data.items.forEach(element => {
          axios.get('http://127.0.0.1:8080/product/'+element.item)
          .then(async function(response) {
            if(response.status === 400){
              throw new Error()
            }else{

              let items = [...that.state.products];
              items.push(response.data)
              await that.setState({products: items})
              if(items.length >= 1){
                await that.setState({hasItems: true})
              }

              let images = [...that.state.images];
              items.push(response.data.images[0])
              await that.setState({images: images})

            }
          })
        })
      }
    })
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    var that = this;
    if(this.state.products[1] && this.state.hasItems){
      return (
        <div className="w-100">
          <Navbar history={this.props.history} />
          <div className="container nav-padding">
            <Title class="display-3" text="Wishlist"/>
          </div>
          <div className="container">
          

                <ul id="list" className="no-bullets">
                {this.state.products.map(function(product, index){
            if(product.images){
              return (
                  <li id={'li-'+product._id} key={ index }>
                    <div className="row pb-1">
                      
                      <div className="d-none col-2 col-lg-2 d-sm-block">
                      <div className="row">
                        <div onClick={that.removeEvent} className="col-4 col-lg-4 my-auto">
                          <ToggleItemWishlist itemId={product._id} removeIcon="fas fa-times p-0 m-0" />      
                        </div>
                        
                        
                       <div className="col-8 col-lg-8">
                        <img onClick={that.handleEvent} id={product._id} src={"http://127.0.0.1:8080/images/"+product.images[0]} className="pointer-cursor img-fluid wishlist-thumbnail p-0 m-0" alt="product"/>
                       </div>
                      </div>

                        
                      </div>
                      <div className="col-1 my-auto d-flex d-sm-none">
                        <i class="pb-3 fas fa-times"></i>
                      </div>
                      <div className="col-5 col-sm-4 my-auto">

                        <span onClick={that.handleEvent} id={product._id} className="pointer-cursor productName-text">{product.productname}</span>
                        
                      </div>
                      <div className="col-2 my-auto">
                        <p className="productPrice-text">{product.price}</p>
                      </div>
                      <div className="d-none d-lg-block col-lg-1 my-auto">
                        <p>In Stock</p>
                      </div>
                      <div className="col-4 col-lg-3 my-auto">
                      <li id="contact" class="btn btn--sm btn-orange text-white text-uppercase" role="button">Add to cart</li>
                      </div>
                      
                    </div>

                  </li>
                                );
                              }
                  
                              })}
                </ul>

          </div>
          <div className="py-5"></div>

          <Footer history={this.props.history}/>
        </div>
      );
    }else{
      return (
        <div className="w-100">
          <Navbar history={this.props.history} />
          <div className="container nav-padding">
            <Title class="display-3" text="Wishlist"/>
          </div>
          <div className="row justify-content-center pt-5">
            <i class="far fa-heart fa-8x"></i>
          </div>
          <div className="row justify-content-center pt-3 pb-5">
            <h2 className="pb-5" >No products were added to the wishlist</h2>
          </div>
          
          <Footer history={this.props.history}/>
        </div>
      );
    }

  }
}
