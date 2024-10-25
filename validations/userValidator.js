const joi = require("joi");
const createUserValidator= joi.object({
    name: joi.string().min(3).max(34).required(),
    username: joi.string().required(),
    password: joi.string().min(8).max(18).required(),
});

module.exports={
    createValidator : async(req,res,next)=>{
        try {
            await createUserValidator.validateAsync(req.body);
            next();

            
        } catch (error) {
            return res.send({
                error:error.message,
            });
            
        }
    },
};