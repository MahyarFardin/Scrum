const { verifyJwtToken } = require("../../modules/functions");
const { UserModel } = require("../../models/users");
const checkLogin = async (req, res, next) => {
    try {
        let authError = { status: 401, message: "please login" };
        const authorization = req?.headers?.authorization;
        if (!authorization) throw authError;
        let token = authorization.split(" ")[1];
        if (!token) throw { status: 401, message: "please login" };
        const result = verifyJwtToken(token);
        const { username } = result;
        const user = await UserModel.find({ username }, { password: 0 });
        if (!user) throw authError;
        req.user = user;
        return next();
    } catch (error) {
        next(error);
    }
};


module.exports = {
    checkLogin
}