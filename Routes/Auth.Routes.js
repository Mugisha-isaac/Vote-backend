const express = require('express');
const {SignupController} = require('../controllers/Auth.controller');

const router = express.Router();

router.route('/signup').post(SignupController);

exports.AuthRoutes = router;