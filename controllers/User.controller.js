const {findAllUsers,getUserByID} = require('../services/User.service');


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