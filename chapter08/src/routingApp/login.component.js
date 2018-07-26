/* noaunflow */

import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export class Login extends React.PureComponent<{
    logging: boolean
}> {
    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        logging: PropTypes.bool.isRequired,
        token: PropTypes.string.isRequired,
        routeAfter: PropTypes.string.isRequired
    };

    state = {
        userName: "",
        password: ""
    };

    onUserNameBlur = e => this.setState({ userName: e.target.value });

    onPasswordBlur = e => this.setState({ password: e.target.value });

    onLoginClick = () =>
        this.props.onLogin(this.state.userName, this.state.password);

    render() {
        if (
            this.state.userName &&
            this.state.password &&
            this.props.token
        ) {
            return <Redirect to={this.props.routeAfter} />;
        } else {
            return (
                <div>
                    <h1>Login Form</h1>
                    <div>
                        User:{" "}
                        <input type="text" onBlur={this.onUserNameBlur} />
                    </div>
                    <div>
                        Password:{" "}
                        <input
                            type="password"
                            onBlur={this.onPasswordBlur}
                        />
                    </div>
                    {this.props.logging ? (
                        "Logging in..."
                    ) : (
                        <button onClick={this.onLoginClick}>Login</button>
                    )}
                </div>
            );
        }
    }
}
