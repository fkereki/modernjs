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
                        <ConnectedProtectedRoutes>
                            <Route
                                path="/"
                                render={() => <div>HOME SWEET HOME</div>}
                            />
                            <Route
                                path="/AAA"
                                render={() => <div>AAA</div>}
                            />
                            <Route
                                path="/BBB"
                                render={() => <div>BBB</div>}
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
