const express=require('express');
const sequelize=require('sequelize');
const location=require('../models/Location');
const router=express.Router();
router.post('/add',(req,res)=>{
  const Name=req.body.name;
  location.create({
    Name
  }).then(result=>{
    res.status(200).json({
      message:'Location added'
    });
  }).catch(err=>{
    res.status(403).json({
      message:'Error occured',
      error:err
    });
  });
});
router.put('/:id',(req,res)=>{
  const id=req.params.id;
  const Name=req.body.name;
  location.update({Name:Name},{where:{id}}).then(result=>{
    res.status(200).json({
      message:'Location updated'
    });
  }).catch(err=>{
    res.status(402).json({
      message:'Error ocured',
      error:err
    });
  });
});
router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  location.destroy({where:{id:id}}).then(result=>{
    if(result==1)
    {
      res.status(200).json({
        message:'Location deleted'
      });
    }
    else
    {
      res.status(404).json({
        message:'Location not found'
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
  location.findAll({}).then(result=>{
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
router.get('/:id',(req,res)=>{
  const id=req.params.id;
  location.findOne({where:{id}}).then(result=>{
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
