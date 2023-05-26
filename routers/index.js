const express = require("express");
const { stationRouter } = require("./stationRouter");
const { userRouter } = require("./userRouter");
const { tripRouter } = require("./tripRouter");

const rootRouter = express.Router();
rootRouter.use("/stations", stationRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/trip", tripRouter);

module.exports = {
    rootRouter,
};
