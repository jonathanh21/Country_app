const initialState = { // To handle de paged within the web app, it's been decided to load all the countries on the redux store
    // according to the filtered or sorted that has been called, however, there is another way to handle it
    // we could set another property in our redux state that says what is the active filter and the active sort
    // so, we could use this property to make the call to the db every time we change from one page to another
    // and filter it or sort it (I did not find a good performance with this procedure)
    activeCountries: [],
    countryDetail: [],
    countriesFilteredAndSorted: [],
    activeForm: true,
    continents:[]
  };

function rootReducer(state = initialState, action) {
    let activeCountries, sorted, result
    switch(action.type) {
        case "GET_COUNTRIES" : // we load all the countries to our store and we set the active countries to the 
        //first ten
            return {
                ...state,
                activeCountries: action.payload.firstTenCountries,
                countriesFilteredAndSorted: action.payload.allCountries
            };
        case "GET_COUNTRIES_FILTERED_BY_NAME" : // we load the countries filtered by name to the store and 
        // set the active countries to the first ten
            activeCountries = action.payload.slice(0,9)
            return {
                ...state,
                activeCountries,
                countriesFilteredAndSorted:action.payload
            };
        case "GET_COUNTRIES_FILTERED_BY_CONTINENT" : // we load the countries filtered by continent to the store
        //and set the active countries to the first ten 
            activeCountries = action.payload.slice(0,9)
            return {
                ...state,
                activeCountries,
                countriesFilteredAndSorted:action.payload
            };
        case "GET_COUNTRIES_FILTERED_BY_ACTIVITY" : // we load the countries filtered by activity to the store
        //and set the active countries to the first ten 
            activeCountries = action.payload.slice(0,9)
            return {
                ...state,
                activeCountries,
                countriesFilteredAndSorted:action.payload
            };
        case "GET_COUNTRIES_SORTED_ALPHAB_ASC" : // we sort the countries alphabetically ascendant
        //and set the active countries to the first ten 
            sorted = [...state.countriesFilteredAndSorted].sort((a, b) => a.name > b.name ? 1: -1)
            result = Array.isArray(state.countriesFilteredAndSorted)?{
                ...state,
                activeCountries: sorted.slice(0,9),
                countriesFilteredAndSorted: sorted
            }:{...state};
            return result;
        case "GET_COUNTRIES_SORTED_ALPHAB_DESC" : // we sort the countries alphabetically descendant
        //and set the active countries to the first ten
            sorted = [...state.countriesFilteredAndSorted].sort((a, b) => a.name > b.name ? -1: 1)
            result = Array.isArray(state.countriesFilteredAndSorted)?{
                ...state,
                activeCountries: sorted.slice(0,9),
                countriesFilteredAndSorted: sorted
                }:{...state};
            return result;
        case "GET_COUNTRIES_SORTED_BY_POPULATION_ASC" : // we sort the countries by population descendant
        //and set the active countries to the first ten 
            sorted = [...state.countriesFilteredAndSorted].sort((a,b) => Number(a.population) > Number(b.population)? 1:Number(a.population) < Number(b.population)?-1:0)
            result = Array.isArray(state.countriesFilteredAndSorted)?{
                ...state,
                activeCountries: sorted.slice(0,9),
                countriesFilteredAndSorted: sorted
                }:{...state};
            return result;
        case "GET_COUNTRIES_SORTED_BY_POPULATION_DESC" : // we sort the countries by population descendant
        //and set the active countries to the first ten 
        sorted = [...state.countriesFilteredAndSorted].sort((a,b) => Number(a.population) > Number(b.population)? -1: 1)
            result = Array.isArray(state.countriesFilteredAndSorted)?{
                ...state,
                activeCountries: sorted.slice(0,9),
                countriesFilteredAndSorted: sorted
                }:{...state};
            return result;
        case "GET_COUNTRIES_FROM_PAGE" : // we set the countries to the active page
        activeCountries = state.countriesFilteredAndSorted.slice(action.payload*10,(action.payload+1)*10 -1)
            return {
                ...state,
                activeCountries
            };
        case "SWITCH_ACTIVE_FORM" : // switch active form from true to false and visc
            return {
                ...state,
                activeForm: !state.activeForm
            };
        default : 
            return state
    }
}

export default rootReducer;