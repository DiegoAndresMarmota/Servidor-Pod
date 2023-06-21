const { matchedData } = require('express-validator');
const { podcastsModel } = require('../models');

/**
 * Obtener la lista de podcasts
 * @param {*} req
 * @param {*} res
 */
const getPodcasts = async (req, res) => {
    try {
        const data = await podcastsModel.find({});
        res.send({ data });
    }catch(error) {
        handleHttpError(res, "ERROR_NOT_FOUND_ALL_PODCASTS", 401);
    }
};


/**
 * Obtener el podcast de la lista, segun id
 * @param {*} req
 * @param {*} res
 */
const getPodcast = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await podcastsModel.findById(id);
        res.send({ data });
    }catch(error) {
        handleHttpError(res, "ERROR_NOT_FOUND_PODCAST", 404);
    }
};


/**
 * Crear un podcast en la lista general
 * @param {*} req
 * @param {*} res
 */
const createPodcast = async (req, res) => {
    try {
        //Validar los datos ingresar en el body
        const validateBody = matchedData(req)
        const data = await podcastsModel.create(validateBody);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_NOT_CREATE_PODCAST", 403);
    }
};


/**
 * Actualizar un podcast de la lista general
 * @param {*} req
 * @param {*} res
 */
const updatePodcast = async (req, res) => {
    try {
        //Validar los datos ingresar en el body
        const {id, ...validateBody } = matchedData(req);
        const data = await podcastsModel.findOneAndUpdate(id, validateBody);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_NOT_UPDATE_PODCAST", 402);
    }
};


/**
 * Eliminar un podcast de la lista general
 * @param {*} req
 * @param {*} res
 */
const deletePodcast = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await podcastsModel.delete({_id:id});
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_NOT_DELETE_PODCAST", 404);
    }
};


module.exports = {
    getPodcasts,
    getPodcast,
    createPodcast,
    updatePodcast,
    deletePodcast,
};
