/*
Title: cart-component.js
Author: Travis Rosen
Date: 4/18/2021
Description: 
*/

//Exporting class 'CartComponent' that extends JavaScripts HTMLElement.
export class CartComponent extends HTMLElement
{
    //Constructor and Super function
   constructor ()
   {
       super();
   }
   //Font-Awesome shopping-cart icon.
   connectedCallback()
   {
       this.innerHTML =
        `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
   }
}

//Calling the function below to pass in the string value of 'cart-component' and class CartComponent.
customElements.define("cart-component", CartComponent);