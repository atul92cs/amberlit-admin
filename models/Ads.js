const sequelize=require('sequelize');
const db=require('../configuration/database');
const Ads=db.define('ads',{
  id:{type:sequelize.INTEGER,primaryKey:true,autoIncrement:true},
  Title:{type:sequelize.STRING},
  Content:{type:sequelize.STRING},
  Picture:{type:sequelize.STRING},
  Category:{type:sequelize.INTEGER},
  Subcategory:{type:sequelize.INTEGER},
  Postedby:{type:sequelize.INTEGER},
  Status:{type:sequelize.STRING}
});
module.exports=Ads;
