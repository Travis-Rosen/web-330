/*
Title: Validator.js
Author: Travis Rosen
Date: 4/25/2021
Description: Validator javascript. 
*/

//Import statements for each class. 
import { FloatField } from "./float-field"
import { FloatMaxField } from "./float-max-field"
import { FloatMinField } from "./float-min-field"
import { RequiredField } from "./required-field"

export class Validator 
{
    validators = [];
    messages = [];

    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    }

    addRequiredFloatField()
    {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMaxField(max)
    {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    addFloatMinField(min)
    {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addRequiredField()
    {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    validate()
    {
        for (const validator of this.validators)
        {
            if (!validator.validate()) 
            {
                this.messages.push(validator.getMessage());
            }
        }
        return this.messages.length == 0;
    }
}
