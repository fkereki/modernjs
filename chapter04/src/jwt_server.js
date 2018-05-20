/* @flow */
"use strict";

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const SECRET_JWT_KEY = "modernJSbook";

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/public", (req, res) => {
    res.send("the /public endpoint needs no token!");
});

app.use((req, res, next) => {
    // First check for the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).send("No token specified");
    }

    // Now validate the token itself
    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET_JWT_KEY, function(err, decoded) {
        if (err) {
            // Token bad formed, or expired, or other problem
            return res.status(403).send("Token expired or not valid");
        } else {
            req.decoded = decoded;
            // Everything OK, keep processing the request
            next();
        }
    });
});

app.get("/private", (req, res) => {
    res.send("the /private endpoint needs JWT, but it was provided: OK!");
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error("Error....", err.message);
    res.status(500).send("INTERNAL SERVER ERROR");
});

app.listen(8080, () =>
    console.log("Mini JWT server ready, at http://localhost:8080/!")
);
