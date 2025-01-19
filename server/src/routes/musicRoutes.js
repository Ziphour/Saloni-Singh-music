const express = require("express");
const { getMusic } = require("../controllers/musicController");
const musicRouter = express.Router();

musicRouter.get("/", getMusic);

module.exports = { musicRouter };
