const joi = require("joi");
const createAuthValidator= joi.object({
    name: joi.string().min(3).max(34).required(),
    username: joi.string().alphanum().required(),
    password: joi.string().min(8).max(18).required(),
});

module.exports={
    createValidatorAuth : async(req,res,next)=>{
        try {
            await createAuthValidator.validateAsync(req.body);
            next();

            
        } catch (error) {
            return res.send({
                error:error.message,
            });
            
        }
    },
};