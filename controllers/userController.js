const {hash}=require("bcryptjs")
module.exports={
    

    getAllUsers:(req,res)=>{

        console.log(req.query);
        
        return res.send("get user");
    },

    createUser:async(req,res)=>{
        try {
        req.body.password= await hash(req.body.password,10);
            
        
        return res.send({
            status:"ok",
            code:200,
            response: req.body,
        });
            
        } catch (error) {
            return res.send({
                status:"error",
                code:400,
                error:error.message,
            });
            
        };
        
    },
    updateUser:(req,res)=>{
        return res.send("update user");
    },

};
