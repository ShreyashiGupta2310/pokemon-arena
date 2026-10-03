import express from "express";
const app = express();
const PORT =3001;
app.get("/api/health", (req , res)=>(
    res.json({
        status:"ok"
    })
));
app.get("/app/hello/:name",(req, res)=>{
    const {name}=req.params;
    res.json({
        message:`Heyyy there , How is your day going ${name}`
    });
});
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
});