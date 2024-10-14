const mongoose = require('mongoose')
const { updateUserPassword } = require('../controllers/usersController')

const userSchema = mongoose.Schema({
    userName : String,
    userPassword : String,
    userEmail : String,
    userPhone : String,
    userGender : {type : String, enum : ["Male", "Female"]},
    userAddress : String,
    userRegisterAt : {type : Date, default : Date.now()}
})

const usersModel = mongoose.model('User', userSchema)

module.exports = usersModel