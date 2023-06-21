const { check } = require("express-validator");
const validateSchemas = require("../utils/handleValidator");

//Validar GetPodcast en podcasts.controllers
const validatorGetPodcast = [
  //Chequear campo media {id} del schema podcasts.models
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
    return validateSchemas(req, res, next);
    },
];

module.exports = { validatorGetPodcast };
