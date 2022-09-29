"use strict";

const net = require("net");

module.exports = function() {
    
    // Server creation with "net" module
    const server = net.createServer();

    server.listen(0);

    let port = server.address().port;

    server.close();

    return port;
};