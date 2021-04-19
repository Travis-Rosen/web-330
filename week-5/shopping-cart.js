/*
Title: shopping-cart.js
Author: Travis Rosen
Date: 4/18/2021
Description: 
*/

//Creating class 'ShoppingCart'.
class ShoppingCart 
{
    //Constructor and array.
    constructor (products) 
    {
        this.products = [];
    }
    //Function to return length of array.
    count()
    {
        return this.products.length;
    }
    //Function to add to products array.
    add(product) 
    {
        this.product = products.push(product)
    }
    //Creating iterator; for of statement to loop over products array.
    myIterator(){
        for (let product of this.products) {
            yield;

        }
    }

}