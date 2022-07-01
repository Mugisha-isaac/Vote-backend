const {createCandidate,getAllCandidates} = require('../services/Candidate.service');

module.exports.create = async(req,res)=>{
    const candidate = await createCandidate(req.body);
    if(candidate) return res.status(200).json(candidate);
    return res.status(500).json({message:"Error creating candidate"});
}

module.exports.getAll = async(req,res)=>{
    const candidates = await getAllCandidates();
    if(candidates) return res.status(200).json(candidates);
    return res.status(500).json({message:"Error getting candidates"});
}