const axios = require('axios');
const {Country, Activity} = require('../db.js');
const {Op}= require('sequelize')

const loadDb = async () => {
    let countries = await Country.findAll();
    if(countries.length === 0) {
        countries = await axios('https://restcountries.eu/rest/v2/all')
        console.log(countries)
        countries = countries.data
        countries.map(async(country) => {
        await Country.create({
                name:country.name,
                id:country.alpha3Code,
                capital: country.capital,
                continent: country.region,
                subregion: country.subregion,
                flag:country.flag,
                population: country.population,
                area:country.area
            })
        })
    }
    return countries
}

const principalRoute = (countries) => {
    let countriesPrincipalRoute = [];
    countries.forEach(country => countriesPrincipalRoute.push({
        name: country.name,
        flag: country.flag,
        continent:country.continent,
        id: country.id
    }))
    return countriesPrincipalRoute
}

const getContinents = async() => {
    const continents = await Country.findAll({
        attributes:['continent'],
        group: ['continent']
    })
    return continents
}

const detailById = async (ID) => {
    const country = await Country.findOne({
        where:{
            id:ID
        },
        include:{
            model:Activity
        }
    });
    return country
}

const countriesByName = async(name) => {
    const countries = await Country.findAll({
        where:{
            name: {
                [Op.like]: `%${name}%`
            }
    }})
    return countries
}

const countriesByActivity = async(activity) => {
    const countries = await Country.findAll({
        include:{
            model:Activity,
            where: {
                name: {
                    [Op.like]: `%${activity}%`
                }
            }
    }})
    return countries
}

const addActivity = async (name, difficulty, duration, season, countries) => {
    const activity = await Activity.create ({
        name,
        difficulty,
        duration,
        season
    })
    await activity.addCountries(countries)
return activity
}

const getActivities = async () => {
    let res = await Activity.findAll()
    return res
}

module.exports = {
    loadDb, 
    principalRoute,
    detailById,
    addActivity,
    countriesByName,
    getActivities,
    countriesByActivity,
    getContinents
}