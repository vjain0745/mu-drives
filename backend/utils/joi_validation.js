const Joi = require('joi');
const responseHandlers = require("../utils/responses");
const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

module.exports.createNewUser = (req, res, next) => {
    try {
        let { body } = req
        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().pattern(emailRegex).required().messages({
                "string.pattern.base": "Please Enter A Valid Email"
            }),
            password: Joi.string().required(),
        })

        const result = schema.validate(body);
        if (!result.error) {
            req.body = result.value;
            return next();
        }

        if (result.error?.details[0].message) {
            throw new Error(result.error.details[0].message)
        }

        throw new Error(result.error.message);

    } catch (error) {
        return responseHandlers.errorHandler(res, error)
    }
};

module.exports.createNewPatient = (res, req) => {
    try {
        let { body } = req
        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
        })

        const result = schema.validate(body);
        if (!result.error) {
            return next();
        }

        if (result.error?.details[0].message) {
            throw new Error(result.error.details[0].message)
        }

        throw new Error(result.error.message);

    } catch (error) {
        return responseHandlers.errorHandler(res, error?.message)
    }
};