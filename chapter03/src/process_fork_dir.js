"use strict";

const fs = require("fs");

process.on("message", obj => {
    // Received a path to process
    fs
        .readdirSync(obj.path)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .filter(file => !file.startsWith("."))
        .forEach(file => process.send(file));
});
