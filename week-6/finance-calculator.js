/*
Title: Finance-Calculator
Author: Travis Rosen
Date: 4/25/2021
Description: Finance Calculator javaScript
*/

//Exporting and defining FinanaceCalculator
export class FinanceCalculator
{
    static MONTHS_IN_YEAR = 12;
    //Calculate future values.
    static calculateFutureValue(monthlyPayment, rate, years)
    {
        let months = years * FinanceCalculator.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));

        return futureValue.toFixed(2)
    }
    //Converts to US currency.
    static convertToCurrency(field)
    {
        let currencyFormatter = new Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency: 'USD'

        });
        return currencyFormatter.format(field);
    }
}