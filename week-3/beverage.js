// Title: beverage.js
// Author: Travis Rosen
// Date: 4/3/2021
// Description: JavaScript file for beverages.

//Importing product class from product.js file.
import { Product } from "./product.js";
//Exporting Beverage class and defining properties. 
export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}