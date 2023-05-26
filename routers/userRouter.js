const express = require("express");
const userController = require("../controllers/userController");
const validation = require("../middlewares/validation");
const authenticate = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const { User } = require("../models");

const userRouter = express.Router();

userRouter.get("/", userController.getAllUser);
userRouter.post("/register", validation.checkEmailUnique(User), userController.register);
userRouter.post("/login", userController.login);
userRouter.post(
    "/upload-avatar",
    authenticate.protect,
    upload.userAvatar("avatar"),
    userController.uploadAvatar
);
userRouter.delete("/:id", userController.deleteById);

userRouter.get("/alltrip", userController.getAllTripOfAllUser);
userRouter.get("/alltrip/:id", userController.getAllTripOfOneUser);

module.exports = {
    userRouter,
};
