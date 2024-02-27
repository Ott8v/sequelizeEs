const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) =>{
    const Doctor = sequelize.define('doctor', {
        docttoe_id: {
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        firstName:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        lastName:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        departementId:{
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false
        }
    },{timestamps:false})

    return Doctor;
}