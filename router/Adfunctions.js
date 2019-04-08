const sequelize=require('sequelize');
const express=require('express');
const router=express.Router();
const Ad=require('../models/Ads');
router.put('/:id',(req,res)=>{
  const id=req.params.id;
  const Status=req.body.status;
  Ad.update({Status:Status},{where:{id}}).then(result=>{
    res.status(200).json({
      message:'Ad updated'
    });
  }).catch(err=>{
    res.status(403).json({
      message:'Error occured',
      error:err
    });
  });
});
router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  Ad.destroy({where:{id:id}}).then(result=>{
    if(result==1)
    {
      res.status(200).json({
        message:'Ad deleted'
      });
    }
    else
    {
      res.status(404).json({
        message:'Ad not found'
      });
    }
  }).catch(err=>{
    res.status(403).json({
      message:'Error occured',
      error:err
    });
  });
});
router.get('/',(req,res)=>{

});
module.exports=router;
