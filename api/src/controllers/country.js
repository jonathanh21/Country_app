const {loadDb, principalRoute, detailById, countriesByName, countriesByActivity, getContinents} = require ('../utils')

const getCountriesByName = async (req,res,next) => {
    if (req.query.name !== undefined){
        const countries =  await countriesByName(req.query.name);
        return countries.length > 0 ? res.send(countries): res.status(200).send('Not found')
    }
    next()
}

const getCountries = async(req,res) => {
    const countries =  await loadDb();
    const continents = await getContinents();
    const countriesPrincipalRoute = principalRoute(countries)
    let result = countriesPrincipalRoute.slice(0,10)
    return res.send({
        allCountries: countries,
        firstTenCountries: result,
        continents
    })
}

const getCountryDetail = async (req, res) => {
    // const countries = await loadDb();
    const country = await detailById(req.params.id)
    return country? res.send(country): res.send('Not found')
}

const getCountriesByActivity = async (req, res, next) => {
    // const countries = await loadDb();
    if (req.query.activity){

        const country = await countriesByActivity(req.query.activity)
        return country? res.send(country): res.send('Not found')
    }
    next()
}

module.exports = {
    getCountries,
    getCountriesByName,
    getCountryDetail,
    getCountriesByActivity
}