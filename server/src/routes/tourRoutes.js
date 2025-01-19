const express = require("express");
const { getTours } = require("../controllers/musicController");

const router = express.Router();

router.get("/", getTours);

module.exports = router;
