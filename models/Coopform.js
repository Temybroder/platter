const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coopformSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  coopname: {
    type: String
  },
  dirname: {
    type: String
  },
    email: {
    type: String
  },
  address: {
    type: String
  },
  img: { 
    data: Buffer, 
		contentType: String 
  },
   submittedby:
  {type: Schema.Types.ObjectId, ref: 'User'}
});

const Coopform = mongoose.model('Coopform', coopformSchema);
module.exports = Coopform;
