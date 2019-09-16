const Sequelize=require('sequelize');
const sequelize=new Sequelize('I4gRGwXdhW','I4gRGwXdhW','cR4qpY4wfX',{
  host:'remotemysql.com',
  port:'3306',
  dialect:'mysql'
});
module.exports=sequelize;
