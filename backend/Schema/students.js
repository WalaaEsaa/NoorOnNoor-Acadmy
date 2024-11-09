const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: String,
    nationalID: Number,
    phoneWhats: Number,
    phoneTelgram: Number,
    email: String,
    birthOfDate:Date,
    class:String,
    department:String,
    password: String,
    confirmPassword: String
    
})
studentSchema.methods.comparePassword=async function (password) {
    //compare pass enter, pass save in db
    return await bcrypt.compare(password,this.password)
    
}
module.exports=mongoose.model('Student',studentSchema)