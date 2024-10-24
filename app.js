const express=require("express");
const port =3000;

const userRouter= require("./routes/userRouter");
const authRouter= require("./routes/authRouter");


const app=express();

app.use("/user",userRouter);
app.use("/auth",authRouter);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
}) 