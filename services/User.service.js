const User  = require('../models/User.model');

module.exports.findAllUsers = async()=>{
    const users = await User.find();
    if(users) return users;
    return null;
}

module.exports.createNewUser = async(user)=>{
   const {nationalId,names,email,password} = user;
   const user = new User();
   user.nationalId = nationalId;
   user.names = names;
   user.email = email;
   user.password = password;

   await user.save();

   return user;
}

module.exports.getUserByID = async(id)=>{
    const user = await User.findById(id);
    if(user) return user;
    return null;
}