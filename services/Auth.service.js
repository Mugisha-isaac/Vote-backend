const User = require('../models/User.model');


module.exports.Signup = async(req)=>{
    const {nationalId,names,email,password} = req;
    const newUser = new User();
    newUser.nationalId = nationalId;
    newUser.names = names;
    newUser.email = email;
    newUser.password =password;
 
    await newUser.save();
 
    return newUser;
 }


// module.exports.Login = async(email,password)=>{
//       const user = await User.findOne({email:email});
//       if(!user) return false;
//       const passwordMatch = 
// }