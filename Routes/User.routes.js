const express = require('express');
const {findAll,getById,voteController} = require('../controllers/User.controller');
const {authorizeVoting,protectRoute} = require('../middlewares/Auth.middleware')


const router = express.Router();



/**
 * @swagger
 * components:
 *   schemas:
 *    User:
 *       type: object
 *       required:
 *         -nationalId
 *         -email
 *         -names
 *         -password  
 *       properties:
 *         id:
 *           type: String
 *           description: auto generated id by mongodb.
 *         names:
 *           type: String
 *           description: user both names
 *           required: true
 *         email:
 *           type: string
 *           description: a unique user email address
 *           required: true
 *           unique: true
 *         nationalId:
 *           type: Number
 *           description: user allowed National ID number. it is 16 digits long no short no long
 *           required: true
 *         password:
 *           type: String
 *           description: This the password for user to login. it is hashed. You need to validate if it contains,characters,numbers, symbols... it should at most be 255 and 8 characters at least
 *           required: true   
 *         voted:
 *           type: Boolean
 *           required: true            
 *           description: by default voted status is set to false
 *            
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: user managing apis
 */


/**
 * @swagger
 * /user:
 *   get:
 *     summary: finds all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: list of users
 *         content:
 *           application/json:
 *             schema: 
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */



/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: get a user by id
 *     tags:
 *      - User
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: String
 *         required: true
 *         description: The id of a user you want to get
 *     responses:
 *       200:
 *         description: User description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: user not found 
 */

router.route('/').get(findAll);
router.route('/:id').get(getById);
router.route('/vote/:id').post(protectRoute,authorizeVoting('user'),voteController);


module.exports.userRoutes = router;

