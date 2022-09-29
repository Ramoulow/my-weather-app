"use strict";


const { app, BrowserWindow } = require("electron");
const { appendFile } = require("original-fs");

const port = require("./server");

const createWindow = () => {
    const win = new BrowserWindow( {
        width: 900,
        height: 800
    });
};

win.loadURL(`http://localhost:${port}`);

app.whenReady().then(() => createWindow());