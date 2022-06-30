const bcrypt = require('bcrypt');

module.exports.hashPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    const val = await bcrypt.hash(password,salt);
    return val;
}

module.exports.verifyPassword = async(unhashed,hashed)=>{
    return bcrypt.compareSync(unhashed,hashed);
}