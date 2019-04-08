const sequelize=require('sequelize');
const db=require('../configuration/database');
const Subcategory=db.define('subcategories',{
  id:{type:sequelize.INTEGER,primaryKey:true,autoIncrement:true },
  Name:{type:sequelize.STRING},
  Categoryid:{type:sequelize.INTEGER}
});

module.exports=Subcategory;
