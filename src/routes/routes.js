const express = require('express');
const routes = express.Router();

const loginController = require('../controller/loginController');
const userRegistrationController = require('../controller/userRegistrationController');

routes.post('/login', loginController);
routes.post('/user-registration', userRegistrationController);

module.exports = routes;