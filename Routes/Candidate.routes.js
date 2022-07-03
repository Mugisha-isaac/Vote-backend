const express = require('express');
const {create,getAll} = require("../controllers/Candidate.controller");

const router = express.Router();



/**
 * @swagger
 * components:
 *   schemas:
 *    Candidate:
 *       type: object
 *       required:
 *         -names
 *         -votes
 *         -imgUrl
 *       properties:
 *         id:
 *           type: String
 *           description: auto generated id by mongodb.
 *         names:
 *           type: String
 *           description: candidate both names
 *           required: true
 *         votes:
 *           type: Number
 *           description: candidate votes. by default it is set to 1.
 *           required: true
 *         imgUrl:
 *           type: String
 *           description: candidate image url
 *           required: true  
 *            
 */

/**
 * @swagger
 * tags:
 *   name: Candidate
 *   description: candidate managing apis
 */


/**
 * @swagger
 * /candidates:
 *   get:
 *     summary: finds all candidates
 *     tags: [Candidates]
 *     responses:
 *       200:
 *         description: list of candidates
 *         content:
 *           application/json:
 *             schema: 
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Candidate'
 */



/**
 * @swagger
 * /candidates/post:
 *   post:
 *     summary: Create a new candidate. 
 *     tags: [Candidates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Candidate'
 *     responses:
 *       200:
 *         description:   candidate  successfully created
 *         content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Candidate'
 *       500:
 *         description:  Server error
 */

router.route('/post').post(create);
router.route('/').get(getAll);

exports.CandidateRoutes = router;