const express = require("express");
const router = express.Router();
const csvController = require("../controllers/tutorials/csv.controller");
const tutorialController = require("../controllers/tutorials/tutorial.controller");
const upload = require("../middlewares/upload");
let routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);
  router.get("/tutorials", tutorialController.listTutorials);
  router.post("/tutorial", tutorialController.createItem);
  router.get("/tutorial/:id", tutorialController.getTutorialById);
  router.put("/:id", tutorialController.updateItem);
  router.delete("/tutorial/:id", tutorialController.deleteTutorial);
  router.delete("/tutorials", tutorialController.deleteAll);

  app.use("/api/csv", router);
};
module.exports = routes;