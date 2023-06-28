const bcrypt = require('bcryptjs');

//Función para encriptar la contraseña
const encryptPassword = async (passwordNoHash) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(passwordNoHash, salt);
    return hash;
}

//Función para comparar la contraseña
const comparePassword = async (passwordNoHash, passwordHash) => {
    return await bcrypt.comparePassword(passwordNoHash, passwordHash);
}

module.exports = { encryptPassword, comparePassword };