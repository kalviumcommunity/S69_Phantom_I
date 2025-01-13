const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to Phantom I")
})

app.get("/ping",(req,res)=>{
    res.send("Welcome to /ping route")
})

app.listen(3000,()=>{
    console.log(`Server is running on port ${3000}`)
})

