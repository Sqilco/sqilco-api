const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "CourseContent",
    },
  ],
  roadmap: [
    {
      type: Schema.Types.ObjectId,
      ref: "RoadmapItem",
    },
  ],
  references: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const CourseContentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["video", "article", "quiz"],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
  },
  order: {
    type: Number,
    required: true,
  },
});

const RoadmapItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  order: {
    type: Number,
    required: true,
  },
});

const CourseModel = mongoose.model("Course", CourseSchema);
const CourseContentModel = mongoose.model("CourseContent", CourseContentSchema);
const RoadmapItemModel = mongoose.model("RoadmapItem", RoadmapItemSchema);

module.exports = {
  CourseModel,
  CourseContentModel,
  RoadmapItemModel,
};
