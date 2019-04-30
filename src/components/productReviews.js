import React, { Component } from 'react';

import $ from "jquery"

export default class App extends Component {

handleEvent = event => {
  var id = event.target.parentNode.className
  id = id.replace('active', '').trim()
  $('li').removeClass('active')
  $(event.target).addClass('active')
  
  $('#description-div').removeClass('d-block')
  $('#description-div').addClass("d-none")
  $('#reviews-div').removeClass('d-block')
  $('#reviews-div').addClass("d-none")
  var div = $('#'+event.target.id.replace('-li','-div'))
  div.addClass("d-block")
};
render() {
    return (
      <div className="container col-xl-6 col-lg-8">
        <div className="row justify-content-center">
          <ul class="tabs no-bullets pointer-cursor text-uppercase">
            <li id="description-li" onClick={this.handleEvent} class="px-2 mr-3 font-weight-bold active">
              Description
            </li>
            <li id="reviews-li" onClick={this.handleEvent} class="ml-3 font-weight-bold px-2">
              Reviews (0)
            </li>
          </ul>
        </div>
        <div className="items">
          <div id="description-div" className="row d-block boxContent">
            <p className="text-center text-grey py-5">{this.props.description}</p>
          </div>
          <div id="reviews-div" className="row d-none boxContent">
            <h4 className="font-weight-bold py-5">Reviews</h4>
            <p className="text-grey">There are no reviews yet.</p>
            
            <p className="text-grey pb-5">Only logged in customers who have purchased this product may leave a review.</p>
          </div>
        </div>

      </div>

      );
  }
};

