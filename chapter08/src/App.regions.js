/* @flow */

import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";

import {
    ConnectedCountrySelect,
    ConnectedRegionsTable
} from "./regionsApp";

import { getCountries, getRegions } from "./regionsApp/serviceApi.js";
import { store } from "./regionsApp/store.js";

class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <ConnectedCountrySelect
                        getCountries={() => store.dispatch(getCountries())}
                        onSelect={c => store.dispatch(getRegions(c))}
                    />
                    <ConnectedRegionsTable />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
