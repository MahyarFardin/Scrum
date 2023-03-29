const { body } = require("express-validator");
const { UserModel } = require("../../models/users");

function registerValidator() {
    return [
        body("username").notEmpty(),

        body("email").isEmail().withMessage("email is not valid"),

        body("mobile")
            .isMobilePhone("fa-IR")
            .withMessage("phone number is not valid"),
        body("password")
            .isLength({ min: 6, max: 16 })
            .withMessage(
                "password should be at least 6 char and maximum 16 char"
            ),
    ];
}

function loginValidator() {
    return [
        body("username")
            .notEmpty()
            .withMessage("username can not be empty")
            .custom(async (username) => {
                const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
                if (usernameRegex.test(username)) {
                    return true;
                }
                throw "username or password is not valid";
            }),

        body("password")
            .isLength({ min: 6, max: 16 })
            .withMessage("password at least 6 char max 16 char"),
    ];
}

module.exports = {
    registerValidator,
    loginValidator,
};
