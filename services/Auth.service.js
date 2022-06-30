const User = require('../models/User.model');
const {hashPassword} = require('../utils/password');
const {verifyPassword} = require('../utils/password');


module.exports.Signup = async(req)=>{
    const {nationalId,names,email,password} = req;
    const hashedPassword = await hashPassword(password);
    const newUser = new User();
    newUser.nationalId = nationalId;
    newUser.names = names;
    newUser.email = email;
    newUser.password =hashedPassword;
 
    await newUser.save();
 
    return newUser;
 }


module.exports.Login = async(email,password)=>{
      const user = await User.findOne({email:email});
      if(!user) return false;
      const passwordMatch = verifyPassword(password,user.password);
      if(!passwordMatch) return false;
      return user;
}