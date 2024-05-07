const {Sequelize, DataTypes}= require('sequelize');
const sequelize=require('../database')

const student = sequelize.define('student',{

    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      Name: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      Age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      CGPA: {
        type: DataTypes.DOUBLE,
        allowNull: false
      }
      

}, {
    timestamps: false // Disable timestamps
  })
module.exports = student;
