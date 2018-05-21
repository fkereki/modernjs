/* @flow */
"use strict";

/* eslint-disable */

const getRegion = async (
    res: any,
    dbConn: any,
    country: ?string,
    region: ?string
) => {
    try {
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
                AND rr.regionCode="${region}"
            `;
        }

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
    try {
        const sqlCities = `
            SELECT 1 FROM cities 
            WHERE countryCode="${country}" 
            AND regionCode="${region}" 
            LIMIT 1"     
        `;
        const cities = await dbConn.query(sqlCities);
        if (cities.length > 0) {
            res.status(403).send("Cannot delete a region with cities");
        } else {
            const deleteRegion = `
                DELETE FROM regions 
                WHERE countryCode="${country}" 
                AND regionCode="${region}"
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
    region: string,
    name: string
) => {
    try {
        const sqlCountry = `
            SELECT 1 FROM countries
            WHERE countryCode="${country}" 
        `;
        const countries = await dbConn.query(sqlCountry);
        if (countries.length === 0) {
            res.status(403).send("Country must exist");
        }

        const sqlGetRegion = `
            SELECT 1 
            FROM regions
            WHERE countryCode="${country}" 
            AND regionCode="${region}" 
        `;
        const regions = await dbConn.query(sqlGetRegion);
        if (regions.length === 0) {
            const sqlAddRegion = `
                INSERT INTO regions SET 
                countryCode="${country}",
                regionCode="${region}",
                regionName="${name}"
            `;

            const result = await dbConn.query(sqlAddRegion);
            if (result.affectedRows > 0) {
                res.status(201).send("Region created");
            } else {
                res.status(409).send("Region not created");
            }
        } else {
            const sqlUpdateRegion = `
                UPDATE regions
                SET regionName="${name}"
                WHERE countryCode="${country}" 
                AND regionCode="${region}" 
            `;

            const result = await dbConn.query(sqlUpdateRegion);
            if (result.affectedRows > 0) {
                res.status(204).send("Region updated");
            } else {
                res.status(409).send("Region not updated");
            }
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

module.exports = { getRegion, deleteRegion, putRegion };
