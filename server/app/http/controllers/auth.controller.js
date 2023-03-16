const { validationResult } = require("express-validator");
const { hashString, tokenGenerator } = require("../../modules/functions");
const { UserModel } = require("../../models/users");
const { compareSync } = require("bcrypt");

class AuthController {
    async register(req, res, next) {
        try {
            const { username, password, email, mobile } = req.body;
            const hash_password = hashString(password);
            const user = new UserModel({
                username,
                email,
                password: hash_password,
                mobile,
            });
            console.log(user);
            await user.save();
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const user = await UserModel.findOne({ username });
            if (!user)
                throw {
                    status: 401,
                    message: "username and password is in correct",
                };
            const compareResult = compareSync(password, user.password);
            if (!compareResult)
                throw {
                    status: 401,
                    message: "username and password is in correct",
                };
            const token = tokenGenerator({ username });
            user.token = token;
            await user.save();
            return res.status(200).json({
                status: 200,
                succes: true,
                message: "login success",
                token,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    resetPassword() {}
}

module.exports = {
    AuthController: new AuthController(),
};
