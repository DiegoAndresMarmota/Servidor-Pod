const { matchedData } = require('express-validator');
const { podcastsModel } = require('../models');

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    try {
        const data = await podcastsModel.find({});
        res.send({ data });
    }catch(error) {
        handleHttpError(res, "ERROR_NOT_FOUND", 401);
    }
};


/**
 * Obtener lista para obtener un item
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};


/**
 * Crear un item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    try {
        //Validar los datos ingresar en el body
        const validateBody = matchedData(req)
        const data = await podcastsModel.create(validateBody);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_NOT_CREATE_ITEM", 403);
    }
};


/**
 * Actualizar un item
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => { };


/**
 * Eliminar un item
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
