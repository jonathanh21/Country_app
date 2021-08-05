const { Router } = require('express');
const {getCountries, getCountriesByName, getCountryDetail, getCountriesByActivity} = require('../controllers/country.js');

const router = Router();

router.get('/', getCountriesByName);
router.get('/', getCountriesByActivity);
router.get('/', getCountries);
router.get('/:id', getCountryDetail)


module.exports = router;