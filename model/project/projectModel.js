const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  features: {
    type: String,
    required: true
  },
  prerequisites: {
    type: String,
    required: true
  },
  seats_left: {
    type: String,
    required: true
  },
  duration_of_project: {
    type: String,
    required: true
  },
  level_of_project: {
    type: String,
    required: true
  },
  mentors: {
    type: String,
    required: true
  },
});

const ProjectModel = mongoose.model('project', ProjectSchema);

module.exports = ProjectModel;