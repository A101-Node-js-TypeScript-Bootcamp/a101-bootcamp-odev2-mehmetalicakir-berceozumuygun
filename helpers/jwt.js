const expressJWT = require('express-jwt')
const secret = "9f40e2f802ef495a6cd8425badba4a2a2a061ab26df353bdea2c5bd193eed8af"

function jwt(){
    return expressJWT({secret,algorithms: ['HS256']}).unless({
        path : [
            '/api/user/register'
        ]
    });
}

module.exports = jwt;