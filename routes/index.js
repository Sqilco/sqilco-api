const express = require('express');
const { registerUser, loginUser, getUsers, logoutUser } = require('../Controller/userController');
const { UserRegistryValidate, userLoginValidate } = require('../utils/userValidate');
const { ensureAuthenticated } = require('../utils/auth');
const {createProject,getProjects,getProjectsId,updateProject,deleteProject} = require('../Controller/projectController/project');
const routes = express.Router();


routes.get('/projects', getProjects, getProjectsId);
routes.post('/projects',createProject);
routes.delete('/projects',deleteProject);
routes.put('/projects',updateProject);

routes.post('/register', UserRegistryValidate ,registerUser);

routes.post('/login', userLoginValidate, loginUser);

routes.post('/logout', ensureAuthenticated, logoutUser);

routes.get('/users', ensureAuthenticated, getUsers);


module.exports = routes;