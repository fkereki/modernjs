/* noflow */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { ConnectedLogin } from "./routingApp";
import { store } from "./routingApp/store";

/* eslint-disable */
class ProtectedRoutes extends React.Component {
    render() {
        return store.getState().token ? (
            this.props.children
        ) : (
            <Redirect to="/login" />
        );
    }
}

class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={ConnectedLogin} />
                        <ProtectedRoutes>
                            <Route
                                path="/"
                                exact
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
                        </ProtectedRoutes>
                        <Route render={() => <div>404 ERROR!</div>} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
