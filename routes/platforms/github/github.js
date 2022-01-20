const express = require("express");
let platform = express.Router();

let githubController = require('../../../controllers/github') //Github controllerı

platform.get('/getUser/:username',githubController.getUser);
platform.get('/getRepos/:username',githubController.getRepos);
platform.get('/getFollowers/:username',githubController.getFollowers);
platform.get('/getFollowing/:username',githubController.getFollowing);
platform.get('/getOrg/:organizationname',githubController.getOrg);
platform.get('/getOrgRepos/:organizationname',githubController.getOrgRepos);

module.exports = platform;

