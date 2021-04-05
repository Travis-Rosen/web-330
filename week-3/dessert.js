// Title: dessert.js
// Author: Travis Rosen
// Date: 4/3/2021
// Description: JavaScript file for desserts.

//Importing product class from product.js
import { Product } from "./product.js";
//Exporting and declaring Dessert class & defining its properties. 
export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}