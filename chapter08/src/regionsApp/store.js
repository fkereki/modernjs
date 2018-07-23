/* @flow */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./worlds.reducer.js";

export const store = createStore(reducer, applyMiddleware(thunk));
