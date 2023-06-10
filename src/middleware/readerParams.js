const readerParams = (req, res, next) => {
    try {
        const keyAPI = req.headers.api_key;
        if(keyAPI !== process.env.API_KEY) {
            next();
        } else {
            res.status(401).json({ message: "No tienes permisos para acceder a esta ruta"});
            res.send({error: "API_KEY no es correcta", message: {err}})
        }
    }catch(err) {
        res.status(500).json({ message: err.message });
        res.send({error: "Error en el servidor", message: {err}})
    }
}

module.exports = readerParams;