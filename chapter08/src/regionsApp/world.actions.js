/* @flow */

export const COUNTRIES_REQUEST = "countries:request";
export const COUNTRIES_SUCCESS = "countries:success";
export const COUNTRIES_FAILURE = "countries:failure";

export const REGIONS_REQUEST = "regions:request";
export const REGIONS_SUCCESS = "regions:success";
export const REGIONS_FAILURE = "regions:failure";

export type worldAction = {
    type: string,
    value?: number
};

export const countriesRequest = () => ({ type: COUNTRIES_REQUEST });

export const countriesSuccess = (listOfCountries: []) => ({
    type: COUNTRIES_SUCCESS,
    listOfCountries
});

export const countriesFailure = () => ({ type: COUNTRIES_FAILURE });

export const regionsRequest = () => ({ type: REGIONS_REQUEST });

export const regionsSuccess = (listOfRegions: []) => ({
    type: REGIONS_SUCCESS,
    listOfRegions
});

export const regionsFailure = () => ({ type: REGIONS_FAILURE });
