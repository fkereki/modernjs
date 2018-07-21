import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { ConnectedCounter, ConnectedClicksDisplay } from "./counterApp";
import { store } from "./counterApp/store";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <ConnectedCounter />
            <hr />
            <ConnectedClicksDisplay />
        </React.Fragment>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
