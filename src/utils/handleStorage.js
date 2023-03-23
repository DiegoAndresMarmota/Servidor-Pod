const multer = require("multer");

const storage = multer.diskStorage({
    //Almacenar
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    //Seleccionar extensión del archivo
    filename: function (req, file, cb) {
        const extension = file.originalname.split(".").pop();
        //Creación del nombre del archivo
        const filename = `file-${Date.now()}.${extension}`;
        cb(null, filename);
    },
});

//Sobreescribir archivo con middleware
const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
