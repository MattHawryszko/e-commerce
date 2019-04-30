import React, { Component } from 'react';

var $ = require('jquery');

var fieldName;
var type;

var minValue;
var maxValue;
var valueCurrent;
var name;

$(document).ready(function(){

  var quantitiy=0;
     $('.quantity-right-plus').click(function(e){
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($('#quantity').val());
          // If is not undefined
            if(quantity<99){
              $('#quantity').val(quantity + 1);
            }   
              // Increment
      });
  
       $('.quantity-left-minus').click(function(e){
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($('#quantity').val());
          // If is not undefined
              // Increment
              if(quantity>1){
              $('#quantity').val(quantity - 1);
              }
      });
      
  });
export default class App extends Component {

render() {
    return (

    <div class="col-6 pt-2 pl-4 pr-0 mr-md-5 mr-1">
      <div class="input-group">
        <span class="input-group-btn">
          <button type="button" class="quantity-left-minus btn btn-number btn-circle bg-light-grey"  data-type="minus" data-field="">
            <span class="text-white fas fa-minus"></span>
          </button>
        </span>
        <input type="text" id="quantity" name="quantity" class="text-center form-control input-number" value="1" min="1" max="99" disabled="disabled" />
        <span class="input-group-btn">
            <button type="button" class="quantity-right-plus btn btn-number btn-circle bg-light-grey" data-type="plus" data-field="">
              <span class="text-white fas fa-plus"></span>
            </button>
        </span>
      </div>
    </div>
      );
  }
};

