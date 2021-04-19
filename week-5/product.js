/*
Title: product.js
Author: Travis Rosen
Date: 4/18/2021
Description: Exports 'Product' class and defines parameters.
*/

//Creating class Product with parameters; exporting class.
export class Product 
{
    constructor(name, price) 
    {
        //Setting class properties 'name' and 'price' to the parameters.
        this.name = name;
        this.price = price;
        //Generating a random value and assigning it to the id field. 
        this.id = Math.random().toString(radix = 16).slice(2);
    }
}

