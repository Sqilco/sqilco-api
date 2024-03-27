const express = require('express');
const { registerUser, loginUser, getUsers, logoutUser } = require('../userController');
const { UserRegistryValidate, userLoginValidate } = require('../utils/userValidate');
const { ensureAuthenticated } = require('../utils/auth');
const projectController = require('../userController/project');
const routes = express.Router();


routes.get('projects', projectController.getAllProjects);
routes.get('project', projectController.getProjectById);

routes.post('/register', UserRegistryValidate ,registerUser);

routes.post('/login', userLoginValidate, loginUser);

routes.post('/logout', ensureAuthenticated, logoutUser);

routes.get('/users', ensureAuthenticated, getUsers);


module.exports = routes;