const sequelize=require('sequelize');
const db=require('../configuration/database');
const Ads=db.define('ads',{
  id:{type:sequelize.INTEGER,primaryKey:true,autoIncrement:true},
  Date:{type:sequelize.STRING},
  Title:{type:sequelize.STRING},
  Content:{type:sequelize.STRING},
  Picture:{type:sequelize.STRING},
  Category:{type:sequelize.INTEGER},
  Subcategory:{type:sequelize.INTEGER},
  Userid:{type:sequelize.INTEGER},
  Status:{type:sequelize.STRING}
});
module.exports=Ads;
