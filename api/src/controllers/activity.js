const {loadDb, addActivity, getActivities} = require ('../utils')

const addAct = async (req,res,next) => {
    const { name, difficulty, duration, season, countries } = req.body;
    //await loadDb();
    try {
        await addActivity(name, difficulty, duration, season, countries)
        return res.status(200).send('everything is fine')
    } catch (err){
        res.status(400).send(err)
    }
}

const getAllActivities = async (req,res,next) => {
        const result = await getActivities()
        return res.send(result)
}


module.exports = {
    addAct,
    getAllActivities
}