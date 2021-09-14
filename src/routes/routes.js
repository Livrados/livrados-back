const express = require('express');
const routes = express.Router();

const authMiddleware = require('../middleware/auth');

const loginController = require('../controller/loginController');
const userRegistrationController = require('../controller/userRegistrationController');

routes.post('/login', loginController);
routes.post('/user-registration', userRegistrationController);

routes.get('/auth', authMiddleware.authUser);

module.exports = routes;