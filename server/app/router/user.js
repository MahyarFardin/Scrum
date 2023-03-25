const { UserController } = require("../http/controllers/user.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { imageValidator } = require("../http/validations/user");
const { upload_multer } = require("../modules/multer");

const rourter = require("express").Router();

rourter.get("/profile", checkLogin, UserController.getProfile);
rourter.post("/profile", checkLogin, UserController.getProfile);
rourter.get("/requests", checkLogin, UserController.getAllRequest);
rourter.get("/requests/:status", checkLogin, UserController.getRequestsByStatus);
rourter.get("/change-status-request/:id/:status", checkLogin, UserController.changeStatusRequest);
rourter.post(
    "/profile-image",
    checkLogin,
    upload_multer.single("image"),
    imageValidator(),
    UserController.uploadProfileImage
);

module.exports = {
    userRoutes: rourter,
};
