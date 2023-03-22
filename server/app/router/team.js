const { TeamController } = require("../http/controllers/team.controller");
const { createTeamValidator } = require("../http/validations/team");
const { expressValidationMapper } = require("../http/middlewares/checkErrors");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { mongoIdValidator } = require("../http/validations/publice");
const router = require("express").Router();

router.post(
    "/create",
    checkLogin,
    createTeamValidator(),
    expressValidationMapper,
    TeamController.createTeam
);
router.get("/list", checkLogin, TeamController.getListOfTeam);
router.get("/me", checkLogin, TeamController.getMyTeams);
router.get(
    "/invite/:teamID/:username",
    checkLogin,
    TeamController.inviteUserToTeam
);
router.patch(
    "/update/:teamID",
    checkLogin,
    TeamController.updateTeam
);
router.get(
    "/:id",
    checkLogin,
    mongoIdValidator(),
    expressValidationMapper,
    TeamController.getTeamById
);
router.delete(
    "/remove/:id",
    checkLogin,
    mongoIdValidator(),
    expressValidationMapper,
    TeamController.removeTeamById
);

module.exports = {
    teamRoutes: router,
};
