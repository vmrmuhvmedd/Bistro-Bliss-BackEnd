const User = require('./../models/usersModel')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const responseMsgs = require('./../utilites/responseMsgs')
const errorHandler = require('./../utilites/errorHandler')
// const { get } = require('mongoose')

const register = async (req,res) => {
    try{
        let newUserData = req.body
        let validationErrors = validationResult(req)
        if (!validationErrors.isEmpty()) {
            throw(validationErrors)
        }
        let hashedPassword = await bcrypt.hash(newUserData.userPassword, 6)
        let addUser = await User.create({...newUserData, userPassword : hashedPassword})
        res.status(201).json({
            status : responseMsgs.SUCCESS,
            data : addUser
        })
    } catch(er) {
        errorHandler(res, er)
    }
}

const login = async (req,res) => {
    try {
        let credentials = req.body
        let getUser = await User.findOne({userEmail : credentials.userEmail})
        if(!getUser){
            throw('User Not Found')
        }

        let checkPassword = await bcrypt.compare(credentials.userPassword, getUser.userPassword)
        if (!checkPassword) {
            throw('Wrong Password')
        }

        let token = jwt.sign({
            name : getUser.userName
        }, process.env.JWTKEY)
        res.cookie('jwt', token).json({
            status : responseMsgs.SUCCESS,
            data : 'Logged In Successfully'
        })
    } catch(er) { 
        console.log(er)
        res.json({
            status : responseMsgs.FAIL,
            data : er
        })
    }
}

const getAllUsers = async (req,res) => {
    try{
        let us = await User.find()
        res.json ({
            status : responseMsgs.SUCCESS,
            data : us
        })
    }catch(er){
        res.json({
            status : responseMsgs.FAIL,
            data : er
        })
    }
}

const getSingleUser = async (req,res) => {
    try{

    }catch(er){

    }
}

const updateUserData = async (req,res) => {
    try{

    }catch(er){

    }
}

const updateUserPassword = async (req,res) => {
    try{

    }catch(er){

    }
}

module.exports = {
    register,
    login,
    getAllUsers,
    getSingleUser,
    updateUserData,
    updateUserPassword
}