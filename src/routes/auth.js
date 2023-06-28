const express = require("express");
const router = express.Router();
const { validatorRegisterUser, validatorLoginUser } = require("../validators/auth");


/**
 * Ingresar al podcast a través del login
 */
router.post("/login", validatorLoginUser, (req, res) => {
    
});


/**
 * Ingresar al podcast a través del register
 */
router.post("/register", validatorRegisterUser, (req, res) => {

});


module.exports = router;
