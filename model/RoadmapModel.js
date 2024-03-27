// roadmapModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechStackSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const WeekDetailsSchema = new Schema({
  weekNumber: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const RoadmapSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  pageContent: {
    duration: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    mainLine: {
      type: String,
      required: true
    },
    points: {
      type: [String],
      required: true
    }
  },
  techStack: {
    type: [TechStackSchema],
    required: true
  },
  weekWiseDetails: {
    type: [WeekDetailsSchema],
    required: true
  }
});

const RoadmapModel = mongoose.model('Roadmap', RoadmapSchema);

module.exports = RoadmapModel;
