/* @flow */
"use strict";

/* eslint-disable */

const getRegion = async (
    res: any,
    dbConn: any,
    country: ?string,
    id: ?string
) => {
    console.log("COUNTRY", country, "ID", id, typeof id);

    let sqlQuery = "";
    if (country == null) {
        sqlQuery = `
            SELECT rr.*, cc.countryName 
            FROM regions rr 
            JOIN countries cc 
            ON cc.countryCode=rr.countryCode
            ORDER BY cc.countryCode, rr.regionCode
      `;
    } else if (id == null) {
        sqlQuery = `
            SELECT rr.*, cc.countryName 
            FROM regions rr 
            JOIN countries cc 
            ON cc.countryCode=rr.countryCode
            WHERE rr.countryCode="${country}"
            ORDER BY rr.regionCode
        `;
    } else {
        sqlQuery = `
            SELECT rr.*, cc.countryName 
            FROM regions rr 
            JOIN countries cc 
            ON cc.countryCode=rr.countryCode
            WHERE rr.countryCode="${country}" 
            AND rr.regionCode="${id}"
        `;
    }

    try {
        const regions = await dbConn.query(sqlQuery);
        res
            .status(200)
            .set("Content-Type", "application/json")
            .send(JSON.stringify(regions));
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const deleteRegion = async (
    res: any,
    dbConn: any,
    country: string,
    region: string
) => {
    const sqlCities = `
        SELECT 1 FROM cities 
        WHERE countryCode="${country} 
        AND regionCode="${region} 
        LIMIT 1"     
    `;

    try {
        const cities = await dbConn.query(sqlCities);
        if (cities.length > 0) {
            res.status(403).send("Cannot delete a region with cities");
        } else {
            const deleteRegion = `
                DELETE FROM regions 
                WHERE countryCode="${country} 
                AND regionCode="${region} 
            `;

            const result = await dbConn.query(deleteRegion);

            if (result.affectedRows > 0) {
                res.status(204).send("Region deleted");
            } else {
                res.status(404).send("Region not found");
            }
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const putRegion = async (
    res: any,
    dbConn: any,
    country: string,
    id: string,
    region: any
) => {
    res.status(200).send("NOTHING DOING NOW...");
};

const postRegion = async (res: any, dbConn: any, region: any) => {
    res.status(200).send("NOTHING DOING NOW...");
};

module.exports = { getRegion, putRegion, deleteRegion, postRegion };
