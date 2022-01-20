const axios = require('axios');
const url = require('url')

//getUser
exports.getUser = async (req,res) => {
    const username = encodeURI(`https://api.github.com/users/${req}`);      //Gelen username linke eklendi.
    const response = await axios.get(username)                          
    return response.data;
}

//getRepos
exports.getRepos = async (req,res) => {
    const repos = encodeURI(`https://api.github.com/users/${req}/repos`);   //Gelen username linke eklendi.
    const response = await axios.get(repos)
    return response.data;
}

//getFollowers
exports.getFollowers = async (req,res) => {
    const followers = encodeURI(`https://api.github.com/users/${req}/followers`); //Gelen username linke eklendi.
    const response = await axios.get(followers)
    return response.data;
}

//getFollowing
exports.getFollowing = async (req,res) => {
    const following = encodeURI(`https://api.github.com/users/${req}/following`); //Gelen username linke eklendi.
    const response = await axios.get(following)
    return response.data;
}

//getOrg
exports.getOrg = async (req,res) => {
    const org = encodeURI(`https://api.github.com/orgs/${req}`);                   //Gelen organizasyon ismi linke eklendi.
    const response = await axios.get(org)
    return response.data;
}
//getOrgRepos
exports.getOrgRepos = async (req,res) => {
    const org = encodeURI(`https://api.github.com/orgs/${req}/repos`);              //Gelen organizasyon ismi linke eklendi.
    const response = await axios.get(org)
    return response.data;
}