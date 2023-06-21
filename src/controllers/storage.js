const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils");
const fs = require("fs");
const PUBLIC_URL = process.env.PUBLIC_URL;
const AUDIO_PATH = `${__dirname}/../storage}`;

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await storageModel.find({});
        res.send({ data });
    }catch(error) {
        handleHttpError(res, "ERROR_NOT_FOUND_ALL_PODCASTS", 401);
    }
};


const getItem = async (req, res) => {
    try {
        const data = await storageModel.findById({id});
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_NOT_FOUND_ALL_PODCASTS", 401);
    }
};


const createItem = async (req, res) => {
    try {
        const { file } = req;
        //FileData extrae el nombre del archivo y la URL
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`,
        };
        const data = await storageModel.create(fileData);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_NOT_FOUND_ALL_PODCASTS", 401);
    }   
};


const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const dataFile = await storageModel.findById({ id });
        await storageModel.deleteOne({ id: id });

        const {filename} = dataFile;
        const fileAudio = `${AUDIO_PATH}/${filename}`;
        
        // fs.unlinkSync(fileAudio);
        const data = {
            fileAudio,
            deleted: true,
        }
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_NOT_FOUND_ALL_PODCASTS", 401);
    }
};


module.exports = { getItems, getItem, createItem, deleteItem };
