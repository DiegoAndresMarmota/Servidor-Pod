const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem } = require("../controllers/podcasts");
const { validatorCreateItem } = require("../validators/podcasts");
const { readerParams } = require("../middlewares/readerParams");

router.get("/", getItems);

router.post("/", validatorCreateItem, readerParams, createItem);

module.exports = router;
