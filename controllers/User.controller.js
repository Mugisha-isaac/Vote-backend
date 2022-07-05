const {findAllUsers,getUserByID,VoteCandidate} = require('../services/User.service');


module.exports.findAll = async(req,res)=>{
    const users = await findAllUsers();
    if(!users) return res.status(404).json({success:false, message:'Users not found', data:null});
    return res.status(200).json({success:true, message:'Users', data: users});
}


module.exports.getById = async(req,res)=>{
    const user = await getUserByID(req.params.id);
    if(!user) return res.status(404).json({success:false, message:"User Not Found ", data: null});
    return res.status(200).json({success:true, message: "User", data: user});
}

module.exports.voteController = async(req,res)=>{
     const voted = await VoteCandidate(req.user.id,req.params.id);
     if(voted === "user not found") return res.status(400).json({success:false, message:voted, data:null});
     if(voted === "Candidate not found") return res.status(400).json({success:false, message:voted, data:null});
     if(voted === true) return res.status(200).json({success:true, message:"Voted Successfully", data:null});
}