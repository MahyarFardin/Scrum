const { validationResult } = require("express-validator");
const { hashString, tokenGenerator } = require("../../modules/functions");
const { UserModel } = require("../../models/users");
const { compareSync } = require("bcrypt");
const { checkLogin } = require("../middlewares/autoLogin");

class AuthController {
    async register(req, res, next) {
        try {
            const { username, password, email, mobile } = req.body;
            const IsUserExist = await UserModel.findOne({username , email , mobile})
            if(IsUserExist) throw {
                status:400,
                message:"this user with this email and username has been already exist"
            }
            const hash_password = hashString(password);
            const user = new UserModel({
                username,
                email,
                password: hash_password,
                mobile,
            });
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
            user.stageTime.loginTime = new Date().getTime();
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
    async logout(req, res, next) {
        try {
            const { username } = req.user[0];
            const logoutTime = new Date().getTime();
            const logoutResult = await UserModel.updateOne(
                { username },
                {
                    $set: {
                        "stageTime.logoutTime": logoutTime,
                    },
                }
            );

            if (logoutResult.modifiedCount == 0)
                throw {
                    status: 401,
                    message: "logout failed",
                };
            return res.status(200).json({
                status: 200,
                message: "logout success",
            });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = {
    AuthController: new AuthController(),
};
