const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const UserModel = mongoose.model('users', userSchema);

// Now you can use the 'User' model to interact with your MongoDB collection.
module.exports = UserModel