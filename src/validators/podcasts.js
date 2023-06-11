const { check } = require('express-validator');
const validateSchemas = require('../utils/handleValidator');

//Validar CreatePodcast en podcasts.controllers
const validatorCreatePodcast = [
    //Chequear campos {name, directory} del schema podcasts.models
    check("name")
        .exists()
        .notEmpty()
        .withMessage("El nombre es requerido"),
    check("directory")
        .exists()
        .notEmpty()
        .withMessage("El directorio es requerido"),
    //Chequear campos {start, end} del schema podcasts.models
    check("audio.type")
        .exists()
        .notEmpty()
        .withMessage("El formato del archivo del audio es requerido"),
    //Chequear campos {name, nickname, theme} del schema podcasts.models
    check("author.name")
        .exists()
        .notEmpty()
        .withMessage("El nombre es requerido"),
    check("author.nickname")
        .exists()
        .notEmpty()
        .withMessage("El sufijo es requerido"),
    check("author.theme")
        .exists()
        .notEmpty()
        .withMessage("El tema es requerido"),
    //Chequear campos {start, end} del schema podcasts.models
    check("duration.start")
        .exists()
        .notEmpty()
        .withMessage("El inicio de la duración es requerido"),
    //Chequear campo media {id} del schema podcasts.models
    check("media.id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateSchemas(req, res, next);
    }
];

//Validar GetPodcast en podcasts.controllers
const validatorGetPodcast= [
    //Chequear campo media {id} del schema podcasts.models
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateSchemas(req, res, next);
    }
];

module.exports = { validatorCreatePodcast, validatorGetPodcast };