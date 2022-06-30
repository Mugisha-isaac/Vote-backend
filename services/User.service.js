const User  = require('../models/User.model');

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