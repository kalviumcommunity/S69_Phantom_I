const express = require('express');
const app = express();
const db = require("./db")

let a = false;
db().then(() => {
    a = true;
    console.log("MongoDB connected successfully");
}).catch(() => {
    console.error("Database connection failed");
});

app.get("/",(req,res)=>{
    res.write("<b>Welcome to Phantom I</b><br><br>")
    if (a){
        res.write(`MongoDB connected with server`)
    }else{
        res.write(`Database connection failed`)
    }
    res.end();
    
})



app.get("/ping",(req,res)=>{
    res.send("Welcome to /ping route")
})


app.listen(3000,()=>{
    console.log(`Server is running on port ${3000}`)
})
