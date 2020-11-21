const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    default: "user",
    enum: ['user', 'lawyer', 'admin'],
    required: true
  },
  address: {
    type: String
  },
  state: {
    type: String
  },
  phone: {
    type: Number
  },
  practice: {
    type: String
},
project: {
  type: Schema.Types.ObjectId, ref: 'Coopform'}

});

const User = mongoose.model('User', userSchema);
module.exports = User;
