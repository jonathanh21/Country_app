import axios from 'axios';

export function getAllCountries() { //1. GET ALL THE COUNTREIS FROM THE DATABASE AND LOAD THE REDUX STORE
    return async (dispatch) => {
        const countries = await axios.get("http://localhost:3001/countries")
        return dispatch({ type: "GET_COUNTRIES", payload: countries.data});
    };
}

export function getCountriesFilteredByName(name) { //2. GET THE COUNTRIES FROM THE DB FILTERED BY NAME
    return async (dispatch) => {
        let countries = await axios.get("http://localhost:3001/countries?name=" + name)
        let countries2 = await axios.get("http://localhost:3001/countries?name=" + name[0].toUpperCase() + name.slice(1))
        countries = Array.isArray(countries.data)>0?countries: countries2
        return dispatch({ type: "GET_COUNTRIES_FILTERED_BY_NAME", payload: countries.data});
    };
}
export function getCountriesFilteredByContinent(continent) { //3. GET THE COUNTRIES FROM THE DB AND FILTER THEM FOR CONTINENT
    return async (dispatch) => {
        const countries = await axios.get("http://localhost:3001/countries")
        const payload = countries.data.allCountries.filter(country => country.continent.includes(continent))
        return dispatch({ type: "GET_COUNTRIES_FILTERED_BY_CONTINENT", payload});
    };
}

export function getCountriesFilteredByActivity(activity) { // 4. GET THE COUNTRIES FROM THE DB FILTERED BY ACTIVITY
    return async (dispatch) => {
        const countries = await axios.get("http://localhost:3001/countries?activity="+activity)
        return dispatch({ type: "GET_COUNTRIES_FILTERED_BY_ACTIVITY", payload: countries.data });
    };
}

export function getCountriesSortedAlphaAsc() { // 5. SORT THE COUNTRIES FROM THE REDUX STORE ALPHABETICALLY ASCENDANT
  return { type: "GET_COUNTRIES_SORTED_ALPHAB_ASC"}
}

export function getCountriesSortedAlphaDesc() { // 6. SORT THE COUNTRIES FROM THE REDUX STORE ALPHABETICALLY DESCENDANT
  return { type: "GET_COUNTRIES_SORTED_ALPHAB_DESC"}
}

export function getCountriesSortedByPopulAsc() { // 7. SORT THE COUNTRIES FROM THE REDUX STORE BY POPULATION ASCENDANT
  return { type: "GET_COUNTRIES_SORTED_BY_POPULATION_ASC"}
}

export function getCountriesSortedByPopulDesc() { // 8. SORT THE COUNTRIES FROM THE REDUX STORE BY POPULATION DESCENDANT
  return { type: "GET_COUNTRIES_SORTED_BY_POPULATION_DESC"}
}

export function getCountriesFromPage(page) { // 9. SEND THE ACTION TO CONTROL THE ACTIVE PAGE THAT IS SHOWN IN THE CLIENT
    return { type: "GET_COUNTRIES_FROM_PAGE", payload:page}
}
export function switchActiveForm() { // 10. SEND THE ACTION TO CHANGE THE BOOLEAN ACTIVE FORM FROM THE STATUS
    return { type: "SWITCH_ACTIVE_FORM"}
}
