const express = require('express');
const routes = express.Router();

const authMiddleware = require('../middleware/auth');

const loginController = require('../controller/loginController');
const userRegistrationController = require('../controller/userRegistrationController');
const bookRegistrationController = require('../controller/bookRegistrationController');

routes.post('/login', loginController);
routes.post('/user-registration', userRegistrationController);
routes.post('/book-registration', bookRegistrationController);

routes.get('/auth', authMiddleware.authUser);

module.exports = routes;