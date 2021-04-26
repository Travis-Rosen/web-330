/*
Title: float-max-field.js
Author: Travis Rosen
Date: 4/25/2021
Description: Max field javascript
*/

//Exporting and defining FloatMinField
export class FloatMinField
{
    constructor(name, field, min)
    {
        this.name = name;
        this.field = field;
        this.min = min;
    }
    //Validating the min amount.
    validate()
    {
        let floatField = parseFloat(this.field);
        return (floatField > this.min);
    }
    //Message that will be returned if the field is under the max defined. 
    getMessage()
    {
        return `${this.name} must be more than ${this.max}. You entered ${this.field}.`;
    }
}