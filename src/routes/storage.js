const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { getItem, getItems, updateItem, deleteItem, createItem } = require("../controllers/storage");
const { validatorGetItem } = require("../validators/storage");

/**
 *  Pendientes...
 */
router.get("/", validatorGetItem, getItem);
router.get("/", getItems);
router.delete("/", validatorGetItem, deleteItem);
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
