"use strict";


// Modules call
// ------------
const express = require("express");
const router = express.Router();



// Page path definition
// --------------------
const path = "/";

const currentWeather = require ("../apiRequest");


// page controler definition
// -------------------------
const controler = (req, res) => {

    let hourElem = currentWeather;

    console.log(hourElem);

};


// Adding page definition to Express's routing register
// ----------------------------------------------------
router.get(path, controller);


// Module export
// -------------
module.exports = router;
