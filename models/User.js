const sequelize=require('sequelize');
const db=require('../configuration/database');
const User=db.define('users',{
  id:{type:sequelize.INTEGER,primaryKey:true,autoIncrement:true},
  Email:{type:sequelize.STRING},
  Name:{type:sequelize.STRING},
  Phone:{type:sequelize.INTEGER},
  Location:{type:sequelize.STRING},
  Picture:{type:sequelize.STRING},
  Status:{type:sequelize.STRING}

});

module.exports=User;
