/* @flow */
/* eslint-disable no-unused-vars */

let flag: number | boolean;
flag = true; // OK
flag = 1; // also OK
flag = "1"; // error: wrong type

let traffic: "red" | "amber" | "green"; // traffic is implicitly string
traffic = "yellow"; // error: not allowed

type numberOrString = number | string;

function addTwo(x: numberOrString, y: numberOrString) {
    return x + y;
}

const fs: any = require("fs");
fs.readFile("/somefilename.ext", processData);
