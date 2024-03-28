const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    Title: { type: String, required: true },
    Tag: { type: String, required: true },
    Description: { type: String, required: true },
    Features: { type: String, required: true },
    Prerequisites: { type: String, required: true },
    Seats_left: { type: Number, required: true },
    Duration_of_project: { type: String, required: true },
    Level_of_project: { type: String, required: true },
    Mentors: [
        {
            name: { type: String, required: true },
            image_link: { type: String, required: true },
            designation: { type: String, required: true }
        }
    ]
});

const ProjectModel = mongoose.model('project', ProjectSchema);

module.exports = ProjectModel;