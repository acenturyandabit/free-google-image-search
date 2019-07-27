//
// Copyright (c) 2017 by Fedir Bobylev. All Rights Reserved.
//
const fetch=require("node-fetch");
const jsdom=require("jsdom");
const { JSDOM } = jsdom;

module.exports=class GoogleImageSearch {

    /**
     * Function for image search
     *
     * @param  {string} query   Image search filed query
     * @return {Promise}        Returns a promise, with an array of found image URL's
     */
    static searchImage(query) {
        query = encodeURIComponent(query)

        return new Promise( (resolve, reject) => {

            // Fetches Items from Google Image Search URL
            fetch(`https://www.google.com.ua/search?q=${query}&tbm=isch&ie=UTF-8&gbv=1&sei=PwQ8Xdn-AtTA3LUPoLWKkAg`)
            .then( res => res.text() )
            .then( res => {

                // Transforms HTML string into DOM object
                let parser = new JSDOM(res);

                // Gets DOM element with image results
                let images = parser.window.document.querySelectorAll(`img[alt*='Image result for ${query}']`);
                images=Array.from(images);
                images=images.map((v)=>{return v.src});
                resolve(images);

            })
            .catch( err => reject(err) )
        })
    }
}
