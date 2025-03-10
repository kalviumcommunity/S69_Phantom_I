const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength: [5, "Password should be greater than 4 characters"],
        select: false,
    }

});

const UserSchema = mongoose.model("UserSchema", userSchema);
module.exports = UserSchema;
