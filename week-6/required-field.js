/*
Title: required-field.js
Author: Travis Rosen
Date: 4/25/2021
Description: Required field javascript.
*/

//Exporting and defining class RequiredField.
export class RequiredField
{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    }
    //This will return true value if the field is validated. 
    validate()
    {
        let valid = Boolean(this.field)
        if (valid)
        {
            valid = Boolean(this.field.trim());
        }
        return valid;
    }
    //Return message if not entered. 
    getMessage()
    {
        return this.name + " is a required field.";
    }
}