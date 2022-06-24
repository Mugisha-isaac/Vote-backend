const express = require('express');
const {findAll,create,getById} = require('../controllers/User.controller');


const router = express.Router();

router.route('/').get(findAll);
router.route('/create').post(create);
router.route('/:id').get(getById);


module.exports.userRoutes = router;

