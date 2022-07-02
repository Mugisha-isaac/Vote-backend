const express = require('express');
const {create,getAll} = require("../controllers/Candidate.controller");

const router = express.Router();

router.route('/post').post(create);
router.route('/').get(getAll);

exports.CandidateRoutes = router;