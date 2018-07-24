/* @flow */

import axios from "axios";

import {
    countriesRequest,
    countriesSuccess,
    countriesFailure,
    regionsRequest,
    regionsSuccess,
    regionsFailure
} from "./world.actions";

export const getCountries = () => async dispatch => {
    try {
        dispatch(countriesRequest());
        // the next line delays execution for 5 seconds:
        // await new Promise(resolve => setTimeout(resolve, 5000));
        const result = await axios.get(`http://fk-server:8080/countries`);
        dispatch(countriesSuccess(result.data));
    } catch (e) {
        dispatch(countriesFailure());
    }
};

export const getRegions = (country: string) => async dispatch => {
    if (country) {
        try {
            dispatch(regionsRequest(country));
            const result = await axios.get(
                `http://fk-server:8080/regions/${country}`
            );
            dispatch(regionsSuccess(result.data));
        } catch (e) {
            dispatch(regionsFailure());
        }
    } else {
        dispatch(regionsFailure());
    }
};

export const getRegions2 = (country: string) => async (
    dispatch,
    getState
) => {
    if (country === getState().currentCountry) {
        console.log("Hey! You are getting the same country as before!");
    }

    if (country) {
        try {
            dispatch(regionsRequest(country));
            const result = await axios.get(
                `http://fk-server:8080/regions/${country}`
            );
            dispatch(regionsSuccess(result.data));
        } catch (e) {
            dispatch(regionsFailure());
        }
    } else {
        dispatch(regionsFailure());
    }
};
