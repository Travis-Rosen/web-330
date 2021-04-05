// Title: main-course.js
// Author: Travis Rosen
// Date: 4/3/2021
// Description: JavaScript file for main courses.

//Importing Product from product.js file.
import { Product } from "./product.js";
//Exporting the Product class and assigning its properties. 
export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name,price);
    }
}