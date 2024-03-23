const mongoose = require('mongoose');
const { Schema } = mongoose;

const PortfolioSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }],
  tags: [{
    type: String
  }],
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'users'
  }],
  comments: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    text: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const PortfolioModel = mongoose.model('portfolios', PortfolioSchema);

module.exports = PortfolioModel;