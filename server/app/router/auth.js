const rourter = require("express").Router();
const { AuthController } = require("../http/controllers/auth.controller");
const {
    registerValidator,
    loginValidator,
} = require("../http/validations/auth");
const { expressValidationMapper } = require("../http/middlewares/checkErrors");
const { checkLogin } = require("../http/middlewares/autoLogin");

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
rourter.get(
    "/logout",
    checkLogin,
    AuthController.logout
);

module.exports = {
    authRoutes: rourter,
};
