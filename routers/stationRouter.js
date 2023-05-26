const express = require("express");
const stationController = require("../controllers/stationController");
const validation = require("../middlewares/validation");
const authenticate = require("../middlewares/authenticate");

const { Station } = require("../models");
const stationRouter = express.Router();

stationRouter.post(
    "/",
    authenticate.protect,
    authenticate.authorize("ADMIN"),
    stationController.createStation
);
stationRouter.get("/", stationController.getAllStation);
stationRouter.get("/:id", stationController.getOneStation);
stationRouter.put(
    "/:id",
    authenticate.protect,
    authenticate.authorize("ADMIN"),
    validation.checkExit(Station),
    stationController.updateStation
);
stationRouter.delete(
    "/:id",
    authenticate.protect,
    authenticate.authorize("ADMIN"),
    validation.checkExit(Station),
    stationController.deleteStation
);

module.exports = {
    stationRouter,
};
