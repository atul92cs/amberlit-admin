const sequelize=require('sequelize');
const db=require('../configuration/database');
const Location =db.define('locations',{
   id:{type:sequelize.INTEGER,primaryKey:true,autoIncrement:true},
   Name:{type:sequelize.STRING}
});
module.exports=Location;
