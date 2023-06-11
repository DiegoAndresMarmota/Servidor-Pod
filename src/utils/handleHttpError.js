const handleHttpError = (res, message = "Error", code = 402) => {
    res.status(code)
    res.status({ error: message })
};

nodule.exports = { handleHttpError };