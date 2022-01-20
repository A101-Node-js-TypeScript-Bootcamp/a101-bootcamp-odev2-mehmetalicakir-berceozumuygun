const jwt = require('jsonwebtoken')
const Joi = require('joi');

exports.register = async (req,res) => {
    
    try {
        const secret = "9f40e2f802ef495a6cd8425badba4a2a2a061ab26df353bdea2c5bd193eed8af";
        const registerSchema = Joi.object({ //Joi istenen ayarlar oluşturuldu.
            email: Joi.string().email().required(), //Joi email için istenen ayarlar oluşturuldu.
            password: Joi.string().min(6).max(16).required() }) //Joi password için istenen ayarlar oluşturuldu.

        const result = await registerSchema.validateAsync(req.body); //Joi kontrol ediyor.
        
        const token = jwt.sign(result,secret,{expiresIn: '7d'}); //Token sign ediliyor.
        res.send({
            status: true,
            email: req.body.email,
            message: `${req.body.email} adresi için anahtarınız oluşturuldu! Bearer Token olarak kullanabilirsin!`,
            token: token
        })
    } catch (error) {
        let response = {
            status: true,
            message: error
        }
        res.status(200).send(response)   
    }
}