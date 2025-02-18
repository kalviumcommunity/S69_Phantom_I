const mongoose = require('mongoose');
require('dotenv').config();

const connect = async()=>{
    try{
        const data = await mongoose.connect('mongodb+srv://user:USER@asap-1.uqzgz.mongodb.net/?retryWrites=true&w=majority&appName=ASAP-1')
        console.log(`MongoDB connected with server: ${data.connection.host}`);
        return true;
    }
    catch{
        
        console.error(`Database connection failed: ${err.message}`);
        return false;
    } 
}

module.exports = connect;