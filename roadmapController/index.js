// roadmapController.js

const { Mongoose } = require("mongoose");
const RoadmapModel = require("../model/RoadmapModel");

module.exports = {
    createRoadmap: async (req, res) => {
        try {
            const roadmap = new RoadmapModel(req.body);
            const savedRoadmap = await roadmap.save();
            return res.status(201).json({ message: 'success', data: savedRoadmap });
        } catch (err) {
            return res.status(500).json({ message: 'error', err });
        }
    },   
     createBulkRoadmaps: async (req, res) => {
        try {
            const roadmaps = req.body;
            const createdRoadmaps = await RoadmapModel.insertMany(roadmaps);
            return res.status(201).json({ message: 'success', data: createdRoadmaps });
        } catch (err) {
            return res.status(500).json({ message: 'error', err });
        }
    },

    getRoadmaps: async (req, res) => {
        try {
            const roadmaps = await RoadmapModel.find();
            return res.status(200).json({ data: roadmaps });
        } catch (err) {
            return res.status(500).json({ message: 'error', err });
        }
    },

    getRoadmapById: async (req, res) => {
        try {
            const roadmap = await RoadmapModel.findById(req.params.id);
            if (!roadmap) {
                return res.status(404).json({ message: 'Roadmap not found' });
            }
            return res.status(200).json({ data: roadmap });
        } catch (err) {
            return res.status(500).json({ message: 'error', err });
        }
    },

 updateRoadmap: async (req, res) => {
    try {
   
        const updatedRoadmap = await RoadmapModel.findByIdAndUpdate(
    req.params.id,
    req.body,
            { new: true}
        );
        if (!updatedRoadmap) {
            return res.status(404).json({ message: 'Roadmap not found' });
        }
        return res.status(200).json({ message: 'success', data: updatedRoadmap });
    } catch (err) {
        return res.status(500).json({ message: 'error', err });
    }
},
    deleteRoadmap: async (req, res) => {
        try {
            const deletedRoadmap = await RoadmapModel.findByIdAndDelete(req.params.id);
            if (!deletedRoadmap) {
                return res.status(404).json({ message: 'Roadmap not found' });
            }
            return res.status(200).json({ message: 'Roadmap deleted successfully' });
        } catch (err) {
            return res.status(500).json({ message: 'error', err });
        }
    }
};
