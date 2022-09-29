"use strict";


const axios = require('axios').default;


const { response } = require("express");
// NodeJS component "http" import for IP api and Geolocalization api
const http = require("http");


// NodeJS component "https" import for Weather api
const https = require("https");
const { getMaxListeners } = require('process');


// Args component import to get keys and values from api requests
const args = require("./args");


// Getting user IP
// ===============

// Using Axios library to exploit api's response data
// const userIpVar = axios.get('https://api.my-ip.io/ip')
//   .then(function (response) {
//     const userIp = response.data;

//      return userIp;

//   });



// Getting user localization
// =========================

// IP api's URL options definition:
// const options = {
//     host: "ip-api.com",
//     path: `/json/${userIpVar}`,
//     method: "GET"
// };



// // Request execution (http.request)
// const request = https.request(options, response => {
//     let data = "";

//     response.on("data", chunk => {
//         data += chunk;
//         console.log(data);
//     });
// });

// response.on("end"), () => {
//     let json = JSON.parse(data);

//     const lat = json.lat;

//     const lon = json.lon;
    
//     return lat;
    
// }



//  axios.get(`http://ip-api.com/json/${userIpVar}`)
//    .then(function (response) {
//     const userLoc = response.data;
//      console.log(userLoc);
//      return userLoc;
//   });


// const options = {
//     host: "ip-api.com/json",
//     path: `${userIp}`,
//     method: "GET"
// }

// const request = https.request(options, response => {
//     let data = "";

//     response.on("data", chunk => {
//         data += chunk;
//         console.log(data);
//     });
// });

// response.on("end"), () => {
//     let json = JSON.parse(data);

//     const ip = json.query;

//     const lat = json.lat;

//     const lon = json.lon;

//     return ip;
//     console.log(ip);
//     return lat;

//     return lon;
    
// }




// axios.get('http://ip-api.com/json')
//     .then(function getLat(response) {
//        const locInfo = response.data;
    
    //    const ip = locInfo.query;

    //    const lat = locInfo.lat;
    
    //    const lon = locInfo.lon;

    //    const city = locInfo.city;

    // });


// console.log(getLat);

// async function getWeather() {
//     const weatherLat = await getLat(response);
//     console.log(weatherLat);
// };

// getWeather();



async function userIp() {
    let ip = await axios.get("http://api.my-ip.io/ip");
    return await ip.data;
}



async function userLoc(ip) {
    let loc = await axios.get(`http://ip-api.com/json/${ip}`);
    let locData = loc.data;
    return await locData;
}



async function userWeather(latitude, longitude) {
    let weather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
    return await weather.data;
}


// async function weatherApp() {

//     let userWeather = await userWeather(latitude, longitude);

//     console.log(userWeather.hourly.time);

//     return userWeather.hourly.time;
// }

// weatherApp();


async function currentWeather() {
    const ip = await userIp();
    const loc = await userLoc(ip);
    const weather = await userWeather(loc.lat, loc.lon);
    const hourList = weather.hourly.time;
    // console.log(hourList);
    
}

module.exports = currentWeather();

// module.exports = currentWeather(hourList);