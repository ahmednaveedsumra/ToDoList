const routes= require("express").Router();

routes.get("/get-auth",(req,res)=>{
    res.send("get all auth");
});



module.exports=routes;