import React, { Component } from 'react';

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Redirect } from 'react-router'
import { Link } from 'react-router'
import Title from "../components/title"
import ToggleItemWishlist from "../components/toggleItemOnWishlist"

const axios = require('axios')

export default class App extends Component {
  
    constructor(props){
      
      super(props)
      this.handleEvent = this.handleEvent.bind(this);
      this.state = {products: [[]], wishlist: [], images: [], redirect: false}
      
  }
  handleEvent(event ,id) {
    const props = this.props;
    props.history.push('/product/'+event.target.id)
  };
  async componentWillMount(){
    
    const that = this
    axios.get('http://127.0.0.1:8080/products')
    .then(async function(response) {
      if(response.status === 400){
        throw new Error()
      }else{
        console.log()
        await that.setState({products: response.data})
      }
    })
  }
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    var that = this;
    return (
      <div className="w-100">
        <Navbar history={this.props.history} />
        <div className="container-fluid nav-padding">
        <Title class="display-3" text="Shop"/>
        </div>
        <ul className="row no-bullets w-100">
        <div className="col-2 d-none d-lg-flex">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum maiores fugiat qui deserunt harum nam placeat, quod reiciendis ipsam exercitationem atque consequuntur labore accusantium dicta! Tempora laudantium corrupti, vel animi unde reiciendis illum quibusdam veniam. Unde praesentium dignissimos culpa maxime distinctio consectetur? Cum facilis facere quasi vel dolor. Eveniet iure fugiat nihil! Animi, molestias. Consequuntur obcaecati maiores adipisci sunt quibusdam pariatur debitis cum, explicabo expedita quas, vel illum minima officia iste error amet. Unde amet, impedit molestias vitae, voluptatibus vero corrupti facilis animi, veritatis consectetur neque! Nobis eos praesentium quia incidunt repellat, consequuntur dolorum dicta fugiat omnis neque optio fugit unde quis error magnam suscipit culpa saepe enim possimus dolores corporis illum, quo dolorem? Optio vel pariatur voluptatem eos, perspiciatis excepturi doloremque quas provident ab nemo delectus odio! Quaerat reprehenderit praesentium nostrum ratione deleniti quae molestias animi neque? Officiis blanditiis adipisci aspernatur qui possimus maiores, ad pariatur consectetur minima cupiditate sit, molestiae, veritatis modi sed omnis minus doloribus voluptate vitae laudantium distinctio architecto ipsum. Neque quo a tempora quisquam explicabo. Veniam praesentium maxime reprehenderit perferendis a nemo tempora perspiciatis est! Distinctio placeat recusandae reprehenderit repellendus molestiae ullam, asperiores iste ad eos, rerum laboriosam tempore. Blanditiis minus cumque ea asperiores voluptate officia unde est sed dolores! Debitis, odio eum mollitia reiciendis voluptates doloribus, in iusto quisquam aperiam dolor itaque quibusdam. Asperiores, minima qui explicabo nam quia veritatis voluptate, harum quas totam, rerum officia odio delectus aliquam magnam. Itaque numquam illum molestiae nulla optio ullam architecto placeat iusto dicta voluptates suscipit, nostrum qui ipsam sapiente facilis est modi, eligendi, sit ipsa pariatur voluptatem eos quo alias. Labore veniam totam dolor soluta incidunt nihil saepe. Dolore ducimus ipsam id cupiditate praesentium dolorum vero maxime. Quisquam ad dicta beatae ratione recusandae consequatur ipsam omnis perferendis laboriosam. Dolorum omnis sit ducimus! Nesciunt laudantium pariatur reprehenderit.</p>
        </div>
        <div className="col-12 col-lg-10">
          <div className="row">
            {this.state.products.map(function(product, index){
              
                if(product.images){
                  return (
                    <li className="col-6 col-md-3">
                      <img onClick={that.handleEvent} id={product._id} src={"http://127.0.0.1:8080/images/"+product.images[0]} className="pointer-cursor img-fluid wishlist-thumbnail p-0 m-0" alt="product"/>
                      <div className="row justify-content-between px-3 pt-3">
                        <small onClick={that.handleEvent} id={product._id} className="pointer-cursor font-weight-bold">{product.productname}</small>
                        
                        <ToggleItemWishlist itemId={product._id} addIcon="far fa-heart" removeIcon="fas fa-heart" />      
                      </div>
                      <div className="row px-3 pb-5">
                        <small>{product.price}</small>
                      </div>
                      
                    </li>
                    
                  );
                }
            })}
          </div>
        </div>


        </ul>
        <Footer history={this.props.history}/>
      </div>
    );
  }
}
