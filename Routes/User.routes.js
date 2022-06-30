const express = require('express');
const {findAll,getById} = require('../controllers/User.controller');


const router = express.Router();

router.route('/').get(findAll);
router.route('/:id').get(getById);


module.exports.userRoutes = router;

