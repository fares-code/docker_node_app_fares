const express = require('express')
const router = express.Router();

const student = require('../model/students')
//get
router.get('/', async(req,res)=>{

    const students = await student.findAll();
    console.log("------------------------------------------------")
console.log(students)
    res.render('index',{ items: students });

   
  
})

module.exports= router;