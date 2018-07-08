/* @flow */

import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export class SassButton extends React.PureComponent<{
    normal: boolean,
    buttonText: string,
    onSelect: void => void
}> {
    static propTypes = {
        normal: PropTypes.bool.isRequired,
        buttonText: PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired
    };

    onSelect() {
        this.props.onSelect();
    }

    render() {
        return (
            <div
                className={
                    this.props.normal ? "normalButton" : "alertButton"
                }
                onClick={this.onSelect.bind(this)}
            >
                <span>{this.props.buttonText}</span>
            </div>
        );
    }
}
