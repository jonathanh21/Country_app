const { Router } = require('express');
const {addAct, getAllActivities} = require('../controllers/activity.js')

const router = Router();

router.post('/', addAct);
router.get('/', getAllActivities);

module.exports = router;