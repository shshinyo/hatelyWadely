const User = require('../models/userModel');
async function createuser(req,res){
    console.log(req.body)

    let user=req.body;  
    let newUser = await new User(user);
   newUser.save((err,done)=>{
       if(err){
        console.log(err);

           res.json({state:false,message:'user didnt created'})
       }else{
           console.log(done)
           res.json({state:true,message:'user created'})
       }
   })
}
async function getUsers(req, res) {
    // const USER = require('./models/userModel');

  let user =   await new User({
        name: 'rehab',
        address: 'bagour',
        phone: '01067390401',
        userType: 'user'
    })
    let users = await User.find({})
    res.json(user);
}

module.exports ={
    createuser,
    getUsers
}