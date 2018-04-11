/* @flow */
"use strict";

const fs = require("fs");

process.stdin.resume();

process.stdin.on("data", path => {
    // Received a path to process
    fs
        .readdirSync(path)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .filter(file => !file.startsWith("."))
        .forEach(file => process.stdout.write(file + "\n"));

    process.stdout.end();
});
