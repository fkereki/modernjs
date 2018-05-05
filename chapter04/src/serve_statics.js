/* @flow */
"use strict";

const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => res.send("Server alive, with Express!"));

app.use(
    "/static",
    express.static(path.join(__dirname, "../flags"), {
        immutable: true,
        maxAge: "30 days"
    })
);

app.listen(8080, () =>
    console.log(
        "Mini Express static server ready at http://localhost:8080/!"
    )
);
