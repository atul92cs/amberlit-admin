const express=require('express');
const sequelize=require('sequelize');
const router=express.Router();
const Subcategory=require('../models/Subcategory');
router.post('/add',(req,res)=>{
   const Name=req.body.name;
   const Categoryid=req.body.category;
   Subcategory.create({
     Name,
     Categoryid
   }).then(result=>{
     res.status(200).json({
       message:'Subcategory created'
     });
   }).catch(err=>{
     res.status(403).json({
       message:'Error occured',
       error:err
     });
   });
});
router.get('/:id',(req,res)=>{
  const id=req.params.id;
  Subcategory.sequelize.query('select subcategories.id,subcategories.Name,categories.id as Categoryid,categories.Name as Category from subcategories join categories on subcategories.Categoryid=categories.id where subcategories.id = ?',{replacements:[id],type:Subcategory.sequelize.QueryTypes.SELECT}).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
    res.status(403).json({
      message:'Error occured',
      Error:err
    });
  });
});
router.get('/',(req,res)=>{
Subcategory.sequelize.query('select subcategories.id,subcategories.Name,categories.id as Categoryid,categories.Name as Category from subcategories join categories on subcategories.Categoryid=categories.id',{type:Subcategory.sequelize.QueryTypes.SELECT})
.then(result=>{
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
router.put('/:id',(req,res)=>{
  const id=req.params.id;
  const name=req.body.name;
  const category=req.body.category;
   Subcategory.update({Name:name,Categoryid:category},{where:{id}}).then(result=>{
     res.status(200).json({
       message:'Subcategory updated'
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
  Subcategory.destroy({where:{id:id}}).then(result=>{
    if(result==1)
    {
      res.status(200).json({
        message:'Subcategory deleted'
      });
    }
    else
    {
      res.status(404).json({
        message:'Subcategory not found'
      });
    }
  }).catch(err=>{
    res.status(403).json({
      message:'Error ocoured',
      error:err
    });
  });
});
module.exports=router;
