import React from "react";

import { CountryFilterBar } from "../countryFilterBar";
import { ResultsDataTable } from "../resultsDataTable";

export class RegionsInformationTable extends React.PureComponent {
    render() {
        return (
            <div style={{ border: "solid" }}>
                <CountryFilterBar />
                <ResultsDataTable />
            </div>
        );
    }
}
