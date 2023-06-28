const express = require("express");
const router = express.Router();
const { validatorRegisterUser, validatorLoginUser } = require("../validators/auth");
const { encryptPassword, comparePassword } = require("../utils/handlePassword");
const { matchedData } = require("express-validator");


/**
 * Ingresar al podcast a través del login
 */
router.post("/login", validatorLoginUser, (req, res) => {
    
});


/**
 * Ingresar al podcast a través del register
 */
router.post("/register", validatorRegisterUser, async (req, res) => {
    req = matchedData(req);
    const passwordHash = await encryptPassword(req.password);
    const body = { ...req, password: passwordHash };
    res.send({data:body})
});


module.exports = router;
