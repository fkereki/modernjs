/* @flow */
"use strict";

const express = require("express");

const routerCities = express.Router();

routerCities.get("/MVD", (req, res) => {
    res.send(`GET Montevideo... path=${req.originalUrl}`);
});

routerCities.get("/:id", (req, res) => {
    res.send(`GET City... path=${req.originalUrl}`);
});

routerCities.delete("/:id", (req, res) => {
    res.send(`DELETE City... path=${req.originalUrl}`);
});

routerCities.post("/", (req, res) => {
    res.send(`POST City... path=${req.originalUrl}`);
});

routerCities.put("/:id", (req, res) => {
    res.send(`PUT City... path=${req.originalUrl}`);
});
module.exports = routerCities;
