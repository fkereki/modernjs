/* @flow */

import { connect } from "react-redux";

import { CountrySelect } from "./countrySelect.component";

const getProps = state => ({
    list: state.countries,
    loading: state.loadingCountries
});

export const ConnectedCountrySelect = connect(getProps)(CountrySelect);
