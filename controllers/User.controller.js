const {findAllUsers,createNewUser,getUserByID} = require('../services/User.service');


module.exports.findAll = async(req,res)=>{
    const users = await findAllUsers();
    if(!users) return res.status(404).json({success:false, message:'Users not found', data:null});
    return res.status(200).json({success:true, message:'Users', data: users});
}

module.exports.create = async(req,res)=>{
    const user = await createNewUser(req.body);
    if(!user) return res.status(400).json({success:false, message:"Failed to create new user", data: null});
    delete user.password;
    return res.status(201).json({message:true, message:'User Created Successfully', data: user });
}

module.exports.getById = async(req,res)=>{
    const user = await getUserByID(req.params.id);
    if(!user) return res.status(404).json({success:false, message:"User Not Found ", data: null});
    return res.status(200).json({success:true, message: "User", data: user});
}