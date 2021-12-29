// Validations
const Joi = require('@hapi/joi');

const registerValidation = reqBody => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    });
    return schema.validate(reqBody);
}

const loginValidation = reqBody => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    });
    return schema.validate(reqBody);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;