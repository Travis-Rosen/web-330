/*
Title: http-client.js
Author: Travis Rosen
Date: 5/9/2021
Description: JS file for HttpClient class
*/

//Exporting and creating HttpClient class
export class HttpClient 
{   
    async get(url, params = '') 
    {
        //Creating url object.
        let urlObject = new URL(url);
        //Creating url params object.
        let paramsObject = new URLSearchParams(params);
        urlObject.search = paramsObject
        //
        const res = await fetch(urlObject.toString(), 
        {
            method: "GET",
        });
        //Return the object as JSON.
        return res.json();
    }
}