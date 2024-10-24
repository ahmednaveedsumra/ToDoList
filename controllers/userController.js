module.exports={
    createUser:(req,res)=>{
        console.log(req.body);
        
        return res.send("create user");
    },

    getAllUsers:(req,res)=>{
        console.log(req.query);
        
        return res.send("get user");
    },
    updateUser:(req,res)=>{
        return res.send("update user");
    },

};
