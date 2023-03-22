const autoBind = require("auto-bind");
const { TeamModel } = require("../../models/team");
const { UserModel } = require("../../models/users");

class TeamController {
    constructor() {
        autoBind(this);
    }
    async createTeam(req, res, next) {
        try {
            const { name, username, description } = req.body;
            const owner = req.user[0].id;
            const team = await TeamModel.create({
                name,
                description,
                owner,
                username,
            });
            if (!team) throw { status: 500, message: "team did not create" };
            return res.status(200).json({
                status: 201,
                success: true,
                message: "team created",
            });
        } catch (err) {
            next(err);
        }
    }
    async getListOfTeam(req, res, next) {
        try {
            const teams = await TeamModel.find({});
            if (!teams) throw { status: 404, message: "there is no team" };
            return res.status(200).json({
                status: 200,
                success: true,
                teams,
            });
        } catch (err) {
            next(err);
        }
    }
    async getTeamById(req, res, next) {
        try {
            const teamId = req.params.id;
            const team = await TeamModel.findById(teamId);
            if (!team) throw { status: 404, message: "team not found" };
            return res.status(200).json({
                status: 200,
                success: true,
                team,
            });
        } catch (err) {
            next(err);
        }
    }

    async getMyTeams(req, res, next) {
        try {
            const userId = req.user[0]._id;
            const teams = await TeamModel.aggregate([
                {
                    $match: { $or: [{ owner: userId }, { users: userId }] },
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "owner",
                        foreignField: "_id",
                        as: "owner",
                    },
                },
                {
                    $project: {
                        "owner.username": 0,
                        "owner.mobile": 0,
                        "owner.email": 0,
                        "owner.teams": 0,
                        "owner.skills": 0,
                        "owner.inviteRequests": 0,
                    },
                },
                {
                    $unwind: "$owner",
                },
            ]);
            return res.status(200).json({
                status: 200,
                success: true,
                teams,
            });
        } catch (err) {
            next(err);
        }
    }

    async findUserInTeam(teamID, userID) {
        const result = await TeamModel.findOne({
            $or: [{ owner: userID }, { users: userID }],
            _id: teamID,
        });
        return !!result;
    }

    async inviteUserToTeam(req, res, next) {
        try {
            const userID = req.user[0]._id;
            const { username, teamID } = req.params;
            const team = await this.findUserInTeam(teamID, userID);
            if (!team)
                throw {
                    status: 400,
                    message: "تیمی جهت دعوت کردن افراد یافت نشد",
                };
            const user = await UserModel.findOne({ username });
            if (!user)
                throw {
                    status: 400,
                    message: "کاربر مورد نظر جهت دعوت به تیم یافت نشد",
                };
            const userInvited = await this.findUserInTeam(teamID, user._id);
            if (userInvited)
                throw {
                    status: 400,
                    message: "کاربر مورد نظر قبلا به تیم دعوت شده است",
                };
            const request = {
                teamID,
                caller: req.user[0].username,
                requestDate: new Date(),
                status: "pending",
            };
            console.log(teamID);
            const updateUserResult = await UserModel.updateOne(
                { username },
                {
                    $push: { inviteRequests: request },
                }
            );
            if (updateUserResult.modifiedCount == 0)
                throw { status: 500, message: "ثبت درخواست دعوت ثبت نشد" };
            return res.status(200).json({
                status: 200,
                success: true,
                message: "ثبت درخواست با موفقیت ایجاد شد",
                request,
            });
        } catch (error) {
            next(error);
        }
    }
    async removeTeamById(req, res, next) {
        try {
            const teamId = req.params.id;
            const team = await TeamModel.findById(teamId);
            if (!team) throw { status: 404, message: "team not found" };
            const result = await TeamModel.deleteOne({ _id: teamId });
            if (result.deletedCount == 0)
                throw { satus: 500, message: "team deleted" };
            res.status(200).json({
                status: 200,
                success: true,
                message: "team was deleted",
            });
        } catch (err) {
            next(err);
        }
    }
    async updateTeam(req, res, next) {
        try {
            const data = { ...req.body };
            Object.keys(data).forEach((key) => {
                if (!data[key]) delete data[key];
                if (["", " ", undefined, null, NaN].includes(data[key]))
                    delete data[key];
            });
            const userID = req.user[0]._id;
            const { teamID } = req.params;
            const team = await TeamModel.findOne({
                owner: userID,
                _id: teamID,
            });
            if (!team)
                throw { status: 404, message: "we can not find any team" };
            const teamUpdateResult = await TeamModel.updateOne(
                { _id: teamID },
                { $set: data }
            );
            if (teamUpdateResult.modifiedCount == 0)
                throw { status: 500, message: "update failed" };
            return res.status(200).json({
                status: 200,
                success: true,
                message: "update done!",
            });
        } catch (err) {
            next(err);
        }
    }
    removeUserFromTeam() {}
}

module.exports = {
    TeamController: new TeamController(),
};
