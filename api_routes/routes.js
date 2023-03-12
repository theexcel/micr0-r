'use strict'

const controller = require('../controllers/appController');

module.exports = (app) => {
    app.get('/about', controller.about);
    app.get('/distance/:zipcode1/:zipcode2', controller.getDistance);
}