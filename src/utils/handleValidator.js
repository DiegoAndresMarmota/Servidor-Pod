const { validateSchema } = require("express-validator");

const validateSchemas = (req, res) => {
    try {
        //Validar el req.schema para continuar
        validateSchemaPodcasts(req).throw();
        return next();
    } catch (error) {
        //Retornando status y response
        return res.status(400).send({ error: error.message() });
    }
};

module.exports = validateSchemas;