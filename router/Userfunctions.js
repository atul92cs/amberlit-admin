const express=require('express');
const router=express.Router();
const User=require('../models/User');
router.put('/:id',(req,res)=>{
  const id=req.params.id;
  const status=req.body.status;
  User.update({Status:status},{where:{id}}).then(result=>{
    res.status(200).json({
      message:'User status updated'
    });
  }).catch(err=>{
    res.status(403).json({
      message:'Error occured',
      error:err
    });
  });
});
router.get('/:id',(req,res)=>{
  const id =req.params.id;
  User.findOne({where:{id}}).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
    res.status(403).json({
      message:'error occured',
      error:err
    });
  });
});
router.get('/',(req,res)=>{
  User.findAll({}).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
    res.status(403).json({
        message:'error occured',
        error:err
    });
  });
});
module.exports=router;
