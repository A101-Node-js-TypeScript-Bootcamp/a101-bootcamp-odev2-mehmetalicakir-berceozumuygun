//JWT:
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

exports.fetchUser = (req,res) => {
        let response = {
            status: true,
        }
        res.status(200).send(response)
}

exports.addUser = (req,res) => {
    if(req.body.username.length < 4){
        let response = {
            status: false,
            message: 'Username 4 karakterden fazla olmali.'
        }
        res.status(200).send(response)
    }else{
        let response = {
            status: true,
            message: 'İşleminiz gerçekleşti.'
        }
        res.status(200).send(response)
    }  
}
