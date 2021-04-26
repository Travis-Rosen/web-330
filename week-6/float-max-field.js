/*
Title: float-max-field.js
Author: Travis Rosen
Date: 4/25/2021
Description: Max field javascript
*/

//Exporting and defining class FloatMaxField
export class FloatMaxField 
{
    constructor(name, field, max)
    {
        this.name = name;
        this.field = field;
        this.max = max;
    }
    //Validating the max amount.
    validate() 
    {
        let floatField = parseFloat(this.field);
        return (floatField < this.max);

    }
    //Message that will be returned if the field is over the max defined. 
    getMessage()
    {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`
    }
}