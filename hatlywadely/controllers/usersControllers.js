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
async function getUsers(req,res){
   let users = await User.find({})
   res.json(users);
}

module.exports ={
    createuser,
    getUsers
}