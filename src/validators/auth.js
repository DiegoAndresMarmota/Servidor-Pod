const { check } = require('express-validator');
const validateSchemas = require('../utils/handleValidator');

//Validar RegisterUser
const validatorRegisterUser = [

    check("name").exists().notEmpty().isLength({ min: 6, max: 30 }),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({ min: 8, max: 16 }),
    (req, res, next) => {
        return validateSchemas(req, res, next);
    },
]

//Validar LoginUser
const validatorLoginUser = [

    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({ min: 8, max: 16 }),
    (req, res, next) => {
        return validateSchemas(req, res, next);
    },
]

module.exports = { validatorRegisterUser, validatorLoginUser};