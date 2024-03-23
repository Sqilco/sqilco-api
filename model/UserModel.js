const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  portfolios: [{
    type: Schema.Types.ObjectId,
    ref: 'portfolios'
  }]
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;