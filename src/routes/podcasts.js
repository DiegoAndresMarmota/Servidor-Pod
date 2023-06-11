const express = require("express");
const router = express.Router();
const { getPodcasts, getPodcast, createPodcast, updatePodcast, deletePodcast } = require("../controllers/podcasts");
const { validatorCreatePodcast, validatorGetPodcast} = require("../validators/podcasts");
// const readerParams = require("../middlewares/readerParams");

/**
 * Obtener la lista de podcasts
 */
router.get("/", getPodcasts);


/**
 * Obtener el podcast de la lista, segun id
 */
router.get("/:id", validatorGetPodcast, getPodcast);


/**
 * Crear un podcast en la lista general
 */
router.post("/", validatorCreatePodcast, createPodcast);


/**
 * Actualizar un podcast en la lista general
 */
router.put("/:id", validatorGetPodcast, validatorCreatePodcast, updatePodcast);


/**
 * Eliminar un podcast de la lista general
 */
router.delete("/:id", validatorGetPodcast, deletePodcast);


module.exports = router;
