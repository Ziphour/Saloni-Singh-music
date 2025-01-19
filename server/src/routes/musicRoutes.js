const { Router } = require("express");
const { getMusic } = require("../controllers/musicController");
const musicRouter = Router();

musicRouter.get("/", (req, res) => {
  console.log("hi music");
  getMusic();
});

module.exports = { musicRouter: musicRouter };
