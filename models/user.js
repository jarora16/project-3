const mongoose = require("mongoose");
// const { User } = require(".");
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    displayName: String,
    email: String,
});

const User = mongoose.model('user', userSchema)

module.exports = User;
