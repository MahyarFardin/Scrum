const { body } = require("express-validator");
const { UserModel } = require("../../models/users");

function registerValidator() {
    return [
        body("username")
            .notEmpty()
            .custom(async (value, ctx) => {
                if (value) {
                    const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
                    if (usernameRegex.test(value)) {
                        const user = await UserModel.findOne({
                            username: value,
                        });
                        if (user) {
                            throw "username has been already saved";
                        }
                        return true;
                    }
                    throw "username is not valid";
                } else {
                    throw "username filed can not be empty";
                }
            }),

        body("email")
            .isEmail()
            .withMessage("email is not valid")
            .custom(async (email) => {
                const user = await UserModel.findOne({ email });
                if (user) throw "email has been already saved";
                return true;
            }),

        body("mobile")
            .isMobilePhone("fa-IR")
            .withMessage("phone number is not valid")
            .custom(async (mobile) => {
                const user = await UserModel.findOne({ mobile });
                if (user) throw "mobile has been already saved";
                return true;
            }),

        body("password")
            .isLength({ min: 6, max: 16 })
            .withMessage(
                "password should be at least 6 char and maximum 16 char"
            )
            .custom((value, ctx) => {
                if (!value) throw "password can not be empty";
                if (value !== ctx?.req?.body?.confirm_password)
                    throw "confirm password is not as same as passsowrd";
                return true;
            }),
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
