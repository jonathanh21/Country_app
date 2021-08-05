const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ActivityRoutes = require('./activity');
const CountriesRoutes = require('./countries');

const router = Router();

router.use('/countries', CountriesRoutes)
router.use('/activity', ActivityRoutes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
