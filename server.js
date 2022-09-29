"use strict";


// Mini frameworks "express" and "ejs" start
// -----------------------------------------
const express = require("express");
const ejs = require("ejs");

// Modules call for routing
const path = require("path");

// const port = 3000;
const guessPort = require("./utils/guess_port");
const port = guessPort;

// console.log(port);

// App setings
// ---------

// Rendering engine definition
app.engine("html", ejs.__express);

// Views files register storage definition
app.set("views", path.join(__dirname, "views"));

// HTML rendering engine use
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "public")));

// Routing

app.use(require("./controllers/homepage"));

app.use(require("./controllers/today"));

app.use(require("./controllers/tomorrow"));

// Starting server App
// -------------------

// app.listen(port, () => {
//     console.log("App listening on port", port);
// });

module.exports = port;

