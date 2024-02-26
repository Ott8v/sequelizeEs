module.exports = (sequelize, Sequelize) =>{
    const Patient = sequelize.define('patient', {
        patient_id: {
            type: Sequelize.BIGINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        lastName:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    },{
        timestamps: false
    });
    return Patient;
};