const routes= require("express").Router();
const {createUser,getAllUsers,updateUser} = require("../controllers/userController");

routes.get("/get-all-users",getAllUsers);

routes.post("/create-user",createUser);
routes.get("/update-user",updateUser);

module.exports=routes;