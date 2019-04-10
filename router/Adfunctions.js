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
router.get('/:id',(req,res)=>{
  const id=req.params.id;
  Ad.sequelize.query('select ads.id,ads.Date,ads.Title,ads.Content,ads.Picture,ads.Status,subcategories.Name as Subcategory,categories.Name as Category,users.Name as User from ads join categories on ads.Category=categories.id join subcategories on ads.Subcategory=subcategories.id join users on ads.Userid=users.id where ads.id=?',{replacements:[id],type:Ad.sequelize.QueryTypes.SELECT}).
  then(result=>{
    res.status(200).json({
      result
    });
    }).catch(err=>{
       res.status(403).json({
         message:'Error occured',
         error:err
       });
  });
});
router.get('/',(req,res)=>{
Ad.sequelize.query('select ads.id,ads.Date,ads.Title,ads.Content,ads.Picture,ads.Status,subcategories.Name as Subcategory,categories.Name as Category,users.Name as User from ads join categories on ads.Category=categories.id join subcategories on ads.Subcategory=subcategories.id join users on ads.Userid=users.id',{type:Ad.sequelize.QueryTypes.SELECT}).then(result=>{
  res.status(200).json({
    result
  });
}).catch(err=>{
  res.status(403).json({
    message:'Error',
    error:err
  });
});
});
module.exports=router;
