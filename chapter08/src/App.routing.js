/* noflow */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ConnectedLogin, ConnectedProtectedRoutes } from "./routingApp";
import { store } from "./routingApp/store";

class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={ConnectedLogin} />
                        <Route
                            path="/about/:something"
                            render={props => (
                                <div>
                                    About... {props.match.params.something}
                                </div>
                            )}
                        />
                        <Route
                            path="/help"
                            render={() => <div>Help!</div>}
                        />
                        <ConnectedProtectedRoutes>
                            <Route
                                exact
                                path="/"
                                render={() => <div>HOME SWEET HOME</div>}
                            />
                            <Route
                                path="/alpha"
                                render={() => <div>Alpha page</div>}
                            />
                            <Route
                                path="/zulu"
                                render={() => <div>Zulu page</div>}
                            />
                        </ConnectedProtectedRoutes>
                        <Route render={() => <div>404 ERROR!</div>} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
