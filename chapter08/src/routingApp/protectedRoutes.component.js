/* @flow */

import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export class ProtectedRoutes extends React.Component<{
    token: string,
    children: [{}],
    location: object
}> {
    static propTypes = {
        token: PropTypes.string.isRequired,
        children: PropTypes.arrayOf(PropTypes.object).isRequired,
        location: PropTypes.object
    };

    render() {
        return this.props.token ? (
            this.props.children
        ) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                }}
            />
        );
    }
}
