const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/cv-generator',{useNewUrlParser : true})

let cvSchema = new Schema({
    fullName: String,
    email: String,
    workExp: String,
    project: String,
    academic: String,
    hobby: String,
    skill: String,
    url : String,
    UserId : String,
    created_at: {
        type : Date,
        default : new Date
    }
})

let CV = mongoose.model('cv',cvSchema)

module.exports = CV