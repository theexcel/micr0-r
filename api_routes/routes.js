'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/appController');
console.log(controller.about)

module.exports = (app) => {
    router.get('/about', controller.about);
    router.get('/distance/:zipcode1/:zipcode2', controller.getDistance);
}