const sequelize=require('sequelize');
const db=require('../configuration/database');
const Category=db.define('categories',{
  id:{type:sequelize.INTEGER,primaryKey:true,autoIncrement:true},
  Name:{type:sequelize.STRING}
});

module.exports=Category;
