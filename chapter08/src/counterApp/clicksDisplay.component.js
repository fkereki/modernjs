/* @flow */

import React from "../../../../../.cache/typescript/2.9/node_modules/@types/react";
import { PropTypes } from "../../../../../.cache/typescript/2.9/node_modules/@types/prop-types";

export class ClicksDisplay extends React.PureComponent<{
    clicks: number
}> {
    static propTypes = {
        clicks: PropTypes.number.isRequired
    };

    render() {
        return <div>Clicks so far: {this.props.clicks}</div>;
    }
}
