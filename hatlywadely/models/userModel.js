const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:String,
    address:String,
    phone:String,
    userType:String
})
module.exports = User = mongoose.model('user',userSchema)