
const {Signup}  = require('../services/Auth.service');

module.exports.SignupController = async(req,res)=>{
    const user = await Signup(req.body);
    if(!user) return res.status(400).json({success:false, message:"Failed to create new user", data: null});
    delete user.password;
    return res.status(201).json({message:true, message:'User Created Successfully', data: user });
}

