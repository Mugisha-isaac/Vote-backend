const Candidate = require('../models/Candidates.model');


module.exports.createCandidate = async(candidate)=>{
    const newCandidate = new Candidate(candidate);
    const savedCandidate = await newCandidate.save();
    if(savedCandidate) return savedCandidate;
    return null;
}

module.exports.getAllCandidates = async()=>{
    const candidates = await Candidate.find();
    if(candidates) return candidates;
    return null;
}


// module.exports.voteCandidate = async(userId,candidateId)=>{
      
// }