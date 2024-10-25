const routes= require("express").Router();
const {login,logout}=require("../controllers/authController");
const{createValidatorAuth}=require("../validations/authValidator");

//routes.get("/get-auth",(req,res)=>{
  //  res.send("get all auth");
//});

routes.post("/login",createValidatorAuth,login);
routes.get("/logout",logout);



module.exports=routes;