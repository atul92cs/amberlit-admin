const express=require('express');
const bodyParser=require('body-parser');
const PORT=process.env.PORT||8080;
const admin=require('./router/Adminfunctions');
const category=require('./router/Categoryfunctions');
const subcategory=require('./router/Subcategoryfunctions');
const ads=require('./router/Adfunctions');
const user=require('./router/Userfunctions');
const location=require('./router/Locationfunctions');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use('/admin',admin);
app.use('/category',category);
app.use('/subcategory',subcategory);
app.use('/location',location);
app.use('/ad',ads);
app.use('/user',user);
app.listen(PORT,()=>{
  console.log('server started on '+PORT);
});
