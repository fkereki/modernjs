/* @flow */

import React from "react";
import TestRenderer from "react-test-renderer";

import { RegionsTable } from "./regionsTable.component";

describe("RegionsTable", () => {
    it("renders correctly an empty list", () => {
        const tree = TestRenderer.create(
            <RegionsTable
                deviceData={{
                    isTablet: false,
                    isPortrait: true,
                    height: 1000,
                    width: 720,
                    scale: 1,
                    fontScale: 1
                }}
                list={[]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correctly a list", () => {
        const tree = TestRenderer.create(
            <RegionsTable
                deviceData={{
                    isTablet: false,
                    isPortrait: true,
                    height: 1000,
                    width: 720,
                    scale: 1,
                    fontScale: 1
                }}
                list={[
                    {
                        countryCode: "UY",
                        regionCode: "10",
                        regionName: "Montevideo"
                    },
                    {
                        countryCode: "UY",
                        regionCode: "9",
                        regionName: "Maldonado"
                    },
                    {
                        countryCode: "UY",
                        regionCode: "5",
                        regionName: "Cerro Largo"
                    }
                ]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
