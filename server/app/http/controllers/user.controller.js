const { UserModel } = require("../../models/users");
const { createLinkForFiles } = require("../../modules/functions");

class UserController {
    getProfile(req, res, next) {
        try {
            const user = req.user[0];
            user.profile_image = createLinkForFiles(user.profile_image, req);
            return res.status(200).json({
                status: 200,
                success: true,
                user,
            });
        } catch (err) {
            next(err);
        }
    }
    async editProfile(req, res, next) {
        try {
            let data = { ...req.body };
            let userID = req.user[0]._id;
            let fields = ["first_name", "last_name", "skills"];
            let badValues = ["", " ", null, undefined, 0, -1, NaN, [], {}];
            Object.entries(data).forEach(([key, value]) => {
                if (!fields.includes(key)) delete data[key];
                if (badValues.includes(value)) delete data[key];
            });
            const result = await UserModel.updateOne(
                { _id: userID },
                { $set: data }
            );
            if (result.modifiedCount > 0) {
                return res.status(200).json({
                    status: 200,
                    succes: true,
                    message: "update user successfully done",
                });
            }
            throw { status: 400, message: "updating is not succesfull" };
        } catch (error) {
            next(error);
        }
    }

    async uploadProfileImage(req, res, next) {
        try {
            const userID = req.user[0]._id;
            if (Object.keys(req.file).length == 0)
                throw { status: 400, message: "please upload an image " };
            const filepath = req.file?.path?.substring(7);
            const result = await UserModel.updateOne(
                { _id: userID },
                { $set: { profile_image: filepath } }
            );
            if (result.modifiedCount == 0)
                throw { statuse: 400, message: "updating not successfull" };
            return res.status(200).json({
                status: 200,
                success: true,
                message: "updating was successfull",
            });
        } catch (error) {
            next(error);
        }
    }
    async getAllRequest(req, res, next) {
        try {
            const userID = req.user[0]._id;
            const requests =
                (
                    await UserModel.aggregate([
                        { $match: { _id: userID } },
                        { $project: { inviteRequests: 0 } },
                        {
                            $lookup: {
                                from: "users",
                                localField: "inviteRequests.caller",
                                foreignField: "usename",
                                as: "inviteRequests.callerInfo",
                            },
                        },
                    ])
                )?.inviteRequests || [];
            return res.json({
                requests,
            });
        } catch (err) {
            next(err);
        }
    }

    async getRequestsByStatus(req, res, next) {
        try {
            const userID = req.user[0]._id;
            const { status } = req.params;
            const requests = await UserModel.aggregate([
                {
                    $match: { _id: userID },
                },
                {
                    $project: {
                        inviteRequests: 1,
                        _id: 0,
                        inviteRequests: {
                            $filter: {
                                input: "$inviteRequests",
                                as: "request",
                                cond: {
                                    $eq: ["$$request.status", status],
                                },
                            },
                        },
                    },
                },
            ]);
            return res.status(200).json({
                status: 200,
                succes: true,
                requests: requests[0],
            });
        } catch (err) {
            next(err);
        }
    }

    async changeStatusRequest(req, res, next) {
        try {
            const { id, status } = req.params;
            const request = await UserModel.findOne({
                "inviteRequests._id": id,
            });
            if (!request)
                throw {
                    status: 404,
                    message: "we can not find a request with given id",
                };
            const findRequest = request.inviteRequests.find(
                (item) => item.id == id
            );
            if (findRequest.status !== "pending")
                throw {
                    status: 400,
                    message: "this request has accepted",
                };
            if (!["accepted", "rejected"].includes(status))
                throw { status: 400, message: "the sennt status is not valid" };
            const updateResult = await UserModel.updateOne(
                { "inviteRequests._id": id },
                {
                    $set: {
                        "inviteRequests.$.status": status,
                    },
                }
            );
            if (updateResult.modifiedCount == 0)
                throw { status: 500, message: "updating not complelete" };
            return res.status(200).json({
                status: 200,
                success: true,
                message: "updated",
            });
        } catch (err) {
            next(err);
        }
    }
    addSkills() {}
    editSkills() {}
    acceptInviteInTeam() {}
    rejectInviteInTeam() {}
}

module.exports = {
    UserController: new UserController(),
};
