const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('activity', {
        name: {
        type: DataTypes.STRING,
        unique: true,
        },
        difficulty: {
        type: DataTypes.DOUBLE,
        validate: {
            withinRange(value){
            if(value > 5 || value < 1){
                throw new Error('The value should be within the range (1,5)')
            }
            }
        }
        },
        duration: {
        type: DataTypes.DOUBLE,
        field: 'duration - horas'
        },
        season: {
        type: DataTypes.STRING,
        }
    });
}