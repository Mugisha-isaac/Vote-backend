const express = require('express');
const {create,getAll} = require("../controllers/Candidate.controller");

const router = express.Router();

router.route('/post').post(create);
router.route('/candidates').get(getAll);


exports.CandidateRoutes = router;