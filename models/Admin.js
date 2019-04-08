const sequelize=require('sequelize');
const db=require('../configuration/database');
const Admin=db.define('admins',{
  username:{
    type:sequelize.STRING
  },
  password:{
    type:sequelize.STRING
  },
  role:{
    type:sequelize.STRING
  }
});

module.exports=Admin;
