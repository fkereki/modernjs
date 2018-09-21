/* @flow */

import React from "react";
import { Provider } from "react-redux";
import Reactotron from "reactotron-react-native";

import { store } from "./src/regionsStyledApp/store";
import { ConnectedMain } from "./src/regionsStyledApp/main.connected";

if (process.env.NODE_ENV === "development") {
    Reactotron.configure({ port: 9090 })
        .useReactNative()
        .connect();
}
export default class App extends React.PureComponent<> {
    render() {
        return (
            <Provider store={store}>
                <ConnectedMain />
            </Provider>
        );
    }
}
