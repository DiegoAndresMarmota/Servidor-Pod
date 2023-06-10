const readerParams = (req, res, next) => {
    try {
        const keyAPI = req.headers.api_key;
        if (keyAPI === process.env.API_KEY) {
            next();
        } else {
            res.status(401);
            res.send({ error: "API_KEY no es correcta" });
        }
    } catch (err) {
        res.status(401);
        res.send({ error: "Error en el servidor" });
    }
};

module.exports = readerParams;