const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const Schema = mongoose.Schema

const teacherSchema = new Schema({
    name: String,
    phoneWhats: Number,
    phoneTelgram: Number,
    email: String,
    time:String,
    day:String,
    department:String,
    password: String,
    confirmPassword: String,
    role:String
    
})
teacherSchema.methods.comparePassword=async function (password) {
    //compare pass enter, pass save in db
    return await bcrypt.compare(password,this.password)
    
}
module.exports=mongoose.model('Teachers',teacherSchema)