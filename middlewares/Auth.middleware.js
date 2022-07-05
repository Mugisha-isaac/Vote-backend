const jwt = require('jsonwebtoken');
const { removeListener } = require('../models/ReactNative.model');
const User = require("../models/User.model");


module.exports.protectRoute = async(req, res, next) => {
    try{
        if(!req.headers.auth){
            res.send({error: "No Authorization Header"});
        }
        else{
            let decoded = jwt.verify(req.headers.auth,process.env.SECRET);
            if(decoded.id){
                let decoded_id = decoded.id;

                const user = await User.findById(decoded_id);
                if(user){
                    req.user = {id:decoded.id,nationalId:user.nationalId,names:user.names,email:user.email, role: user.userType};
                    next();
                }
            }   
        }
    }
    catch(err){
        res.send({error: err});
    }
}

module.exports.authorizeVoting = (...roles)=>{
    return async(req,res,next)=>{
        if(roles.includes(req.user.role)){
            next()
        }
        else{
            res.status(401).json({
                error:"Access Denied"
            })
        }
    }
}