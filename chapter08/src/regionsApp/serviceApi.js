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
        const result = await axios.get(`http://fk-server:8080/countries`);
        dispatch(countriesSuccess(result.data));
    } catch (e) {
        dispatch(countriesFailure());
    }
};

export const getRegions = (country: string) => async dispatch => {
    if (country) {
        try {
            dispatch(regionsRequest());
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
