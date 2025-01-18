
const express = require("express");
const { getTours } = require("../controllers/tourController");

const router = express.Router();

router.get("/", getTours);

module.exports = router;
    