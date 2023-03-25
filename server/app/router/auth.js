const rourter = require("express").Router();
const { AuthController } = require("../http/controllers/auth.controller");
const {
    registerValidator,
    loginValidator,
} = require("../http/validations/auth");
const { expressValidationMapper } = require("../http/middlewares/checkErrors");

rourter.post(
    "/register",
    registerValidator(),
    expressValidationMapper,
    AuthController.register
);
rourter.post(
    "/login",
    loginValidator(),
    expressValidationMapper,
    AuthController.login
);

module.exports = {
    authRoutes: rourter,
};
