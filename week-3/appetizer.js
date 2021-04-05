// Title: appetizer.js
// Author: Travis Rosen
// Date: 4/3/2021
// Description: JavaScript file for appetizers

//Importing product class from product.js
import { Product } from "./product.js";
//Exporting Appetizer class and defining properties. 
export class Appetizer extends Product 
{
    constructor(name, price)
    {
        super(name, price);
    }
}