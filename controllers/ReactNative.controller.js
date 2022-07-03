const jwt = require('jsonwebtoken');
const {createUSer,Login}  = require("../services/ReactNative.service");


module.exports.SignupController = async (req, res) => {
    const user = await createUSer(req.body);
    if (!user)
      return res
        .status(400)
        .json({
          success: false,
          message: "Failed to create new user",
          data: null,
        });
    delete user.password;
    return res
      .status(201)
      .json({ message: true, message: "User Created Successfully", data: user });
  };
  
  module.exports.LoginController = async (req, res) => {
    const user = await Login(req.body.email, req.body.password);
  
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "invalid credentials", data: user });
  
        const id = user._id;
        let payload = {id};
  
        let accessToken = jwt.sign(payload,process.env.SECRET,{
          algorithm:process.env.ALGORITHM,
          expiresIn:process.env.EXPIRESIN
        });
  
        res.cookie("jwt",accessToken,{secure:true,httpOnly:true});
        return res.status(200).json({
          success:true,
          token:accessToken,
          message:"Login Successfully completed..",
          expiresIn:process.env.EXPIRESIN,
          user:user
        })
    
  };
  