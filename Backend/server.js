const express = require('express');
const cors = require('cors')
const routes = require("./routes")
const app = express();

app.use(cors())
app.use(express.json())
app.use('/',routes)

const db = require("./db")

let a = false;
db().then(() => {
    console.log("MongoDB connected successfully");
    a=true
}).catch(() => {
    console.error("Database connection failed");
});
console.log(a)

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

