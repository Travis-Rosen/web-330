/*
Title: Float-field.js
Author: Travis Rosen
Date: 4/25/2021
Description: float field javascript
*/

//Exporting and defining float field class
export class FloatField 
{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    }

    validate()
    {
        let checkForNaN = parseFloat(this.field);
        return !isNaN(checkForNaN);
    }
    //Return Message.
    getMessage() 
    {
        return `${this.name} must be a float value. You entered ${this.field}.`
    }
}