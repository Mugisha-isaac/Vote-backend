const User  = require('../models/User.model');
const Candidate = require("../models/Candidates.model")

module.exports.findAllUsers = async()=>{
    const users = await User.find();
    if(users) return users;
    return null;
}


module.exports.getUserByID = async(id)=>{
    const user = await User.findById(id);
    if(user) return user;
    return null;
}


module.exports.VoteCandidate = async(userId,candidateId)=>{
     const user  = await User.findById(userId);
     if(!user) return "user not found";
     const votedCandidate = await Candidate.findById(candidateId);
     if(!votedCandidate) return "Candidate not found";
         console.log(votedCandidate);
        user.voted = true;
        votedCandidate.votes = votedCandidate.votes + 1;
        let userDetails = [];
        let newUser = {
            nationalId:user.nationalId,
            names:user.names,
            email:user.email,
        }
        userDetails.push(newUser);
        votedCandidate.votedUser = userDetails;
        user.candidateVoted = votedCandidate._id;
        await user.save();
        await votedCandidate.save();


        return true;
}