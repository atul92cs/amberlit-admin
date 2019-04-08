const express=require('express');
const router=express.Router();
const admin=require('../models/Admin');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
router.post('/register',(req,res)=>{
  bcrypt.hash(req.body.password,10).then(hash=>{
    const username=req.body.username;
    const password=hash;
    const role=req.body.role;
    admin.create({
      username,
      password,
      role
    }).then(()=>{
      res.status(200).json({
        message:"User registered"
      });
    }).catch(err=>{
      res.status(401).json({
        message:"error occured",
        error:err
      });
    });
  });
});
router.post('/login',(req,res,next)=>{
  const username=req.body.username;
  let fectchedUser;
   admin.findOne({where:{username}}).then((Admin) => {
       if(!Admin)
       {
         res.status(401).json({
           message:'Auth failed'
         });
       }
       fectchedUser=Admin;
      return bcrypt.compare(req.body.password,Admin.password);
   }).then(result=>{
      if(!result)
      {
        res.status(403).json({
          message:'authentication problem'
        });
      }
      const token =jwt.sign(
        {username:fectchedUser.username},
        "Secret",
        {expiresIn:"72h"}
      );
      res.status(200).json({
        token:token,
        expiresIn:72000,
        username:fectchedUser.username,
        role:fectchedUser.role
      });
   }).catch((err) => {
        res.status(500).json({
          message:'Oops error occured',
          err:err
        });
   });
});

module.exports=router;
