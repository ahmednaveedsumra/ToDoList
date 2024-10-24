const routes= require("express").Router();

routes.get("/get-all-users",(req,res)=>{
    res.send("get all users");
});

routes.get("/create-user",(req,res)=>{
    res.send("create user api");
});

module.exports=routes;