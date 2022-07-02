const ReactNative = require('../models/ReactNative.model');
const {hashPassword} = require('../utils/password');
const {verifyPassword} = require('../utils/password');

module.exports.createUSer = async(req)=>{
    const {name,email,password} = req;
    const hashedPassword = await hashPassword(password);
    const newUser = new ReactNative();
    newUser.name = name;
    newUser.email = email;
    newUser.password =hashedPassword;
 
    await newUser.save();
 
    return newUser;
 }

module.exports.Login = async(email,password)=>{
    const user = await ReactNative.findOne({email:email});
    if(!user) return false;
    const passwordMatch = verifyPassword(password,user.password);
    if(!passwordMatch) return false;
    return user;
}