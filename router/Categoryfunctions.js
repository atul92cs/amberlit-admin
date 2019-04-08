const express=require('express');
const router=express.Router();
const Category=require('../models/Categories');
router.post('/add',(req,res)=>{
  const Name=req.body.name;
  Category.create({
    Name
  }).then(()=>{
    res.status(200).json({
      message:'Category added'
    });
  }).catch(err=>{
    res.status(403).json({
      message:'error',
      error:err
    });
  });
});

router.put('/:id',(req,res)=>{
  const id=req.params.id;
  const Name=req.body.name;
  Category.update({
    Name:Name
  },{where:{id}}).then(()=>{
    res.status(200).json({
      message:'Category updated'
    });
  }).catch(err=>{
    res.status(403).json({
      message:'error occured',
      error:err
    });
  });
});
router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  Category.destroy({where:{id:id}}).then(result=>{
    if(result==1)
    {
      res.status(200).json({
        message:'Category deleted'
      });
    }
    else
    {
      res.status(403).json({
        message:'Category not found'
      });
    }
  }).catch(err=>{
    res.status(405).json({
      message:'Error occured',
      error:err
    });
  });
});
router.get('/',(req,res)=>{
  Category.findAll({}).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
    res.status(402).json({
      message:'error occured',
      error:err
    });
  });
});
module.exports=router;
