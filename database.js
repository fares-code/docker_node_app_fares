const express = require('express');

require('dotenv').config()


const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_ROOT_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DELICATE
  }
);


    
//code to check that this code run or not
sequelize.authenticate().
then(()=>{console.log('Connection has been established successfully.');}).
catch((err)=>{console.log(err)})

    module.exports= sequelize;