/* @flow */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools-sp";

import { reducer } from "./world.reducer";

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);
