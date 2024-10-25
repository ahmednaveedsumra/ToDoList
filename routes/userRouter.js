const routes= require("express").Router();
const {createUser,getAllUsers,updateUser} = require("../controllers/userController");

const{createValidator}=require("../validations/userValidator");

routes.get("/get-all-users",getAllUsers);

routes.post("/create-user",createValidator,createUser);
routes.get("/update-user",updateUser);

module.exports=routes;