"use strict";


// Export the anonymous function allowing to split keys and values from api response
// (in "input" constant) then rebuilding it (in "output" variable) for better use in apiRequest.js
// --------------------------------------------------
module.exports = new function () {
    const input = process.argv.slice(2);
    let output = {};

    input.forEach(arg => {

        let item = arg.split("=");
        let key = item[0];
        let value = item[1];

        output[key] = value;

    });

    return output;

};