const { body } = require('express-validator')
const User = require('./../models/usersModel')

const usersValidation = () => {
    return [
        body('userName').notEmpty().withMessage('Name Can Not Be Empty'),
        body('userPassword').notEmpty().withMessage('Password Can Not Be Empty'),
        body('userEmail').notEmpty().withMessage('Email Can Not Be Empty')
        .isEmail().withMessage('Email Format is Invalid')
        .custom( async (data) => {
            let checkUser = await User.findOne({userEmail : data})
            if (checkUser) {
                throw('User Already Exists')
            }
        }),
        body('userPhone').notEmpty().withMessage('Phone Can Not Be Empty')
        .isMobilePhone().withMessage('Phone Format is Invalid')
        .custom( async (data) => {
            let checkUser = await User.findOne({userPhone : data})
            if (checkUser) {
                throw('Phone Already Exists')
            }
        }),
        body('userGender').notEmpty().withMessage('Gender Can Not Be Empty'),
        body('userAddress').notEmpty().withMessage('Address Can Not Be Empty')
    ]
}

module.exports = usersValidation






// userGender : {type : String, enum : ["Male", "Female"]},
// userAddress : String,