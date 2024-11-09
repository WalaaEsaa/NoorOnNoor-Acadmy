const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = new Schema({
    class: String,
    subjectName: Number,
    studentName:String,
    studentPhone:Number,  
    grade:Number
   
    
     
})

module.exports=mongoose.model('Exams',examSchema)