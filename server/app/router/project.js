const { ProjectController } = require("../http/controllers/project.controller");
const { createProjectValidator } = require("../http/validations/project");
const { expressValidationMapper } = require("../http/middlewares/checkErrors");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { uploadFile } = require("../modules/express-fileupload");
const fileupload = require("express-fileupload");
const { mongoIdValidator } = require("../http/validations/publice");
const projectController = require("../http/controllers/project.controller");

const router = require("express").Router();

router.post(
    "/create",
    fileupload(),
    checkLogin,
    uploadFile,
    createProjectValidator(),
    expressValidationMapper,
    ProjectController.createProject
);


router.get("/list", checkLogin, ProjectController.getAllProject);
router.get(
    "/:id",
    checkLogin,
    mongoIdValidator(),
    expressValidationMapper,
    ProjectController.getProjectById.bind(projectController)
);
router.delete(
    "/remove/:id",
    checkLogin,
    mongoIdValidator(),
    expressValidationMapper,
    ProjectController.removeProject
);
router.put(
    "/edit/:id",
    checkLogin,
    mongoIdValidator(),
    expressValidationMapper,
    ProjectController.updateProject
);
router.patch(
    "/edit-projectImage/:id",
    fileupload(),
    checkLogin,
    uploadFile,
    mongoIdValidator(),
    expressValidationMapper,
    ProjectController.updateProjectImage
);

module.exports = {
    projectRoutes: router,
};
