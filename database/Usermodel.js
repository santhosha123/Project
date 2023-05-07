const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  email:
  {
    type: String,
    required:true
  }
});

const Usermodel = mongoose.model('User', userSchema);

module.exports = Usermodel;
