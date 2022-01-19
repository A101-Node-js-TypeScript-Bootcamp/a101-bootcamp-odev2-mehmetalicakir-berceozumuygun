const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const Joi = require('joi');
 
exports.register = (req,res) => {
    let tokenArray = req.headers.authorization.split(' ');
    let token = tokenArray[1];
    let decodedHeader = jwt_decode(token,{payload:true})
    
    let response = {
        status: true,
        message: decodedHeader
    }
    res.status(200).send(response)
}

exports.login = async (req,res) => {
    if (req.body.email === 'name@surname.com' && req.body.password === "password") {
        const secret = "9f40e2f802ef495a6cd8425badba4a2a2a061ab26df353bdea2c5bd193eed8af";
        const registerSchema = Joi.object({ //Joi istenen ayarlar oluşturuldu.
            email: Joi.string().email().required(), //Joi email için istenen ayarlar oluşturuldu.
            password: Joi.string().min(6).max(16).required() //Joi parola istenen ayarlar oluşturuldu.
        });

        const result = await registerSchema.validateAsync(req.body); //Joi kontrol ediyor.
            
        const token = jwt.sign(result,secret,{expiresIn: '7d'}); //Token sign ediliyor.
        res.send({
            status: true,
            token: token
        })
    }else{
    let response = {
        status: true,
        message: "Giriş bilgileri hatalı"
    }
    res.status(200).send(response)
}}