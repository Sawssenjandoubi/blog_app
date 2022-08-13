const Joi = require("joi");

const RegisterValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email({
                minDomainSegments: 2,
            })
            .messages({
                "string.empty": "email cannot be an empty field",
                "string.email": "email must be a valid email",
                "string.required": "email is a required field",
            }),
        password: Joi.string()
            .min(8)
            .required()
            .pattern(
                new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
                )
            )
            .messages({
                "string.min": "Password length must be at least 8 characters",
                "string.pattern.base":
                    "The password must contain at least 1 lowercase, 1 uppercase, 1 numeric character, one special character",
                "string.required": "email is a required field",
            }),
        repeat_password: Joi.any()
            .equal(Joi.ref("password"))
            .required()
            .label("Confirm password")
            .options({
                messages: {
                    "any.only": "Confirm password does not match",
                    "any.required": "Please confirm your password",
                },
            }),
    });
    return schema.validate(data);
};

module.exports.RegisterValidation = RegisterValidation;