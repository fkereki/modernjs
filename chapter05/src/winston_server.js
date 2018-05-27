/* @flow */
"use strict";

const express = require("express");
const app = express();

const winston = require("winston");

const logger = winston.createLogger({
    level: "info",

    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize({ all: true }),
                winston.format.label({ label: "w_s" }),
                winston.format.timestamp(),
                winston.format.printf(
                    msg =>
                        `${msg.timestamp} [${msg.label}] ${msg.level} ${
                            msg.message
                        }`
                )
            )
        }),
        new winston.transports.File({
            filename: "w_s_error.txt.log",
            level: "error",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.printf(
                    msg => `${msg.timestamp} ${msg.level} ${msg.message}`
                )
            )
        }),
        new winston.transports.File({
            filename: "w_s_error.json.log",
            level: "error"
        })
    ]
});

logger.level = "debug";

logger.error("This is an error");
logger.info("This is an info");
logger.warn("This is a warning");
logger.debug("This is debugging info");

app.get("/", (req, res) => {
    logger.info("Request for root /");
    res.send("Winston server!");
});

app.get("*", (req, res) => {
    logger.error(`UNKNOWN ROUTE ${req.originalUrl}`);
    res.status(404).send("NOT FOUND");
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    logger.error(`GENERAL ERROR ${err.message}`);
    res.status(500).send("INTERNAL SERVER ERROR");
});

app.listen(8081, () => logger.info("Ready at http://localhost:8080"));
