const express = require("express");
const validation = require("../middlewares/validation");
const tripController = require("../controllers/tripController");
const { Trip } = require("../models");

const tripRouter = express.Router();

tripRouter.post("/", tripController.createTrip);
tripRouter.get("/", tripController.getAllTrip);
tripRouter.get("/:id", tripController.getOneTrip);
tripRouter.put("/:id", validation.checkExit(Trip), tripController.updateTrip);
tripRouter.delete("/:id", validation.checkExit(Trip), tripController.deleteTrip);

module.exports = {
    tripRouter,
};
