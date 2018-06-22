import React from "react";

import { CountryFilterBar } from "../countryFilterBar";
import { ResultsDataTable } from "../resultsDataTable";

export class RegionsInformationTable extends React.PureComponent {
    state = {
        countries: [
            { code: "AR", name: "Argentine" },
            { code: "BR", name: "Brazil" },
            { code: "PY", name: "Paraguay" },
            { code: "UY", name: "Uruguay" }
        ],

        regions: [
            { id: "UY/5", name: "Durazno", cities: 8, pop: 60000 },
            { id: "UY/7", name: "Florida", cities: 20, pop: 67000 },
            { id: "UY/9", name: "Maldonado", cities: 17, pop: 165000 },
            { id: "UY/10", name: "Montevideo", cities: 1, pop: 1320000 },
            { id: "UY/11", name: "Paysandu", cities: 16, pop: 114000 }
        ]
    };

    update(country: string) {
        // get a new list of regions when the country changes
        console.log(`Country ... ${country}`);
    }

    render() {
        return (
            <div>
                <CountryFilterBar
                    list={this.state.countries}
                    onSelect={this.update.bind(this)}
                />
                <ResultsDataTable results={this.state.regions} />
            </div>
        );
    }
}
