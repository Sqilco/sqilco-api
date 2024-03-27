const ProjectModel = require('../model/project/projectModel');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching projects." });
  }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found." });
    }
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred while fetching project information." });
  }
};
