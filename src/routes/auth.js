const express = require("express");
const router = express.Router();
const { validatorRegisterUser, validatorLoginUser } = require("../validators/auth");
const { matchedData } = require("express-validator");


/**
 * Ingresar al podcast a través del login
 */
router.post("/login", validatorLoginUser, (req, res) => {
    
});


/**
 * Ingresar al podcast a través del register
 */
router.post("/register", validatorRegisterUser, (req, res) => {
    req = matchedData(req);
    res.send({data: req})

});


module.exports = router;
