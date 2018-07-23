/* @flow */

import React from "../../../../../.cache/typescript/2.9/node_modules/@types/react";
import { PropTypes } from "../../../../../.cache/typescript/2.9/node_modules/@types/prop-types";

import {
    increment,
    decrement,
    reset,
    CounterAction
} from "./counter.actions";

export class Counter extends React.PureComponent<{
    count: number,
    dispatch: CounterAction => any
}> {
    static propTypes = {
        count: PropTypes.number.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    onAdd1 = () => this.props.dispatch(increment(1));
    onSub2 = () => this.props.dispatch(decrement(2));
    onReset = () => this.props.dispatch(reset());

    render() {
        return (
            <div>
                Value: {this.props.count}
                <br />
                <button onClick={this.onAdd1}>Add 1</button>
                <button onClick={this.onSub2}>Subtract 2</button>
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }
}
