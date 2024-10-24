const routes= require("express").Router();
const {login,logout}=require("../controllers/authController");

//routes.get("/get-auth",(req,res)=>{
  //  res.send("get all auth");
//});

routes.get("/login",login);
routes.get("/logout",logout);



module.exports=routes;