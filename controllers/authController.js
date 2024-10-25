module.exports={
    login:(req,res)=>{
        console.log(req.body);
        return res.send("login request");
    },

    logout:(req,res)=>{
        return res.send("logout request");
    },

}