const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
<<<<<<< HEAD
    googleId: String,
    displayName: String,
    email: String,
});

mongoose.model('user', userSchema)
=======
    googleId: String
});

mongoose.model('user', userSchema)
>>>>>>> d81109692f9434cae547ff4e5b91ecaea9ae3317
