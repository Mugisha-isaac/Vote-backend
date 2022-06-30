const express = require('express');
const {SignupController,LoginController} = require('../controllers/Auth.controller');

const router = express.Router();

router.route('/signup').post(SignupController);
router.route('/login').post(LoginController);

exports.AuthRoutes = router;