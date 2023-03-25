const { body, param } = require("express-validator");
const { TeamModel } = require("../../models/team");

function createTeamValidator() {
    return [
        body("name")
            .isLength({ min: 5 })
            .withMessage("name can not be less than 5 char"),
        body("description")
            .notEmpty()
            .withMessage("description can not be empty"),
        body("username").custom(async (username) => {
            const usernameRegex = /^[a-z]+[a-z0-9\_\.]{3,}$/gim;
            if (usernameRegex.test(username)) {
                const team = await TeamModel.findOne({ username });
                if (team) throw "this team has been already created";
                return true;
            }
        }),
    ];
}

// function inviteToTeam() {
//     return [
//         param("teamID").custom(async (teamID, { req }) => {
//             const userID = req.user[0]._id;
//             const team = await TeamModel.findOne({
//                 _id: teamID,
//                 $or: [{ owner: userID }, { users: userID }],
//             });
//             if (!team)
//                 throw {
//                     message: "we can not find any team for inviteation",
//                 };
//         }),
//         param('username').custom(),
//     ];
// }

module.exports = {
    createTeamValidator,
};
