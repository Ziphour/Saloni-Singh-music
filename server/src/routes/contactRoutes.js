const { Router } = require("express");
const { getMusic } = require("../controllers/musicController");
const contactRouter = Router();

contactRouter.get("/", (req, res) => {
  console.log("hi contact");
  //   getMusic;
});

module.exports = { contactRouter: contactRouter };
