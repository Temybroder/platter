const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampSchema = new mongoose.Schema({

  coopname: {
    type: String,
    default: ""
  },
  identify: {
    type: String
  },
    email: {
    type: String
  }
});

const Samp = mongoose.model('Samp', SampSchema);

module.exports = Samp;
