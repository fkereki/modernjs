/* @flow */
"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const dbConn = require("./restful_db.js");

app.get("/", (req, res) => res.send("Secure server!"));

/*
    Add here the logic for CORS

const cors = require("cors");
app.use(cors());
*/

app.use(bodyParser.urlencoded({ extended: false }));

/*
    Add here the logic for providing a JWT at /gettoken
    and the logic for validating a JWT, as shown earlier
*/

const {
    getRegion,
    deleteRegion,
    postRegion,
    putRegion
} = require("./restful_regions.js");

app.get("/regions/", (req, res) => getRegion(res, dbConn));

app.get(
    "/regions/:country/",
    (req, res) => (
        console.log(req), getRegion(res, dbConn, req.params.country)
    )
);

app.get("/regions/:country/:region/", (req, res) =>
    getRegion(res, dbConn, req.params.country, req.params.region)
);

app.delete("/regions/:country/:region", (req, res) =>
    deleteRegion(res, dbConn, req.params.country, req.params.region)
);

app.post("/regions/:country", (req, res) =>
    postRegion(res, dbConn, req.params.country, req.body.name)
);

app.put("/regions/:country/:region", (req, res) =>
    putRegion(
        res,
        dbConn,
        req.params.country,
        req.params.region,
        req.body.name
    )
);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error("Error....", err.message);
    res.status(500).send("INTERNAL SERVER ERROR");
});

/*
    Add here the logic for HTTPS

const https = require("https");
const fs = require("fs");
const path = require("path");
const keysPath = path.join(__dirname, "../../certificates");
const ca = fs.readFileSync(`${keysPath}/modernjsbook.csr`);
const cert = fs.readFileSync(`${keysPath}/modernjsbook.crt`);
const key = fs.readFileSync(`${keysPath}/modernjsbook.key`);

https.createServer({ ca, cert, key }, app).listen(8443);

    and remove the following line if HTTPS is used
*/
app.listen(8080, () =>
    console.log("Routing ready at http://localhost:8080")
);
