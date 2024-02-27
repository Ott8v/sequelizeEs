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
        },
        cf:{
            type: Sequelize.STRING(16),
            allowNull: false
        },
        blood:{
            type: Sequelize.ENUM,
            values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
            allowNull: false
        },
        sex:{
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        nationality:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        email:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    },{
        timestamps: false
    });
    return Patient;
};