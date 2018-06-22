import React from "react";
import PropTypes from "prop-types";

export class ResultsDataTable extends React.PureComponent {
    static propTypes = {
        results: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    render() {
        if (this.props.results.length === 0) {
            return "No regions can be shown.";
        } else {
            return (
                <div>
                    {this.props.results.map(x => (
                        <div key={x.id}>
                            {x.name}
                            {x.cities}
                            {x.pop}
                        </div>
                    ))}
                </div>
            );
        }
    }
}
