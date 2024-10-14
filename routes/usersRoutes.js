const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')
const usersValidation = require('../validations/userValidation')
// const usersMiddleware = require('./../middlewares/usersMiddleware')

router.post('/register', usersValidation(),userController.register)
router.post('/login',userController.login)

router.get('/', userController.getAllUsers)

module.exports = router