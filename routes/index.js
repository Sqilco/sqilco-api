const express = require('express');
const { registerUser, loginUser, getUsers, logoutUser } = require('../userController');
const{createRoadmap,getRoadmaps,getRoadmapById,
    updateRoadmap,deleteRoadmap,createBulkRoadmaps}=require('../roadmapController');
const { UserRegistryValidate, userLoginValidate } = require('../utils/userValidate');
const { ensureAuthenticated } = require('../utils/auth');
const routes = express.Router();


//user routes
routes.post('/register', UserRegistryValidate ,registerUser);

routes.post('/login', userLoginValidate, loginUser);

routes.post('/logout', ensureAuthenticated, logoutUser);

routes.get('/users', ensureAuthenticated, getUsers);

//roadmap routes
routes.post('/roadmaps', createRoadmap);

routes.post('/roadmaps/bulk', createBulkRoadmaps);

routes.get('/roadmaps', getRoadmaps);

routes.put('/roadmaps/:id', updateRoadmap);

routes.get('/roadmaps/:id', getRoadmapById);



routes.delete('/roadmaps/:id', deleteRoadmap);



module.exports = routes;

    