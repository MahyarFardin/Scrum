const { ProjectModel } = require("../../models/project");
const autoBind = require("auto-bind");
const { createLinkForFiles } = require("../../modules/functions");

class ProjectController {
    constructor() {
        autoBind(this);
    }
    async createProject(req, res, next) {
        try {
            const { title, text, image, tags } = req.body;
            const owner = req.user[0]._id;
            const result = await ProjectModel.create({
                title,
                text,
                owner,
                image,
                tags,
            });
            if (!result)
                throw {
                    status: 400,
                    message: "creating new project not successfull",
                };
            return res.status(201).json({
                status: 201,
                success: true,
                message: "new project created",
            });
        } catch (err) {
            next(err);
        }
    }
    async getAllProject(req, res, next) {
        try {
            const owner = req.user[0]._id;
            const projects = await ProjectModel.find({ owner });
            for (const project of projects) {
                project.image = createLinkForFiles(project.image,req)
            }
            return res.status(200).json({
                status: 200,
                success: true,
                projects,
            });
        } catch (err) {
            next(err);
        }
    }
    async findProject(projectId, owner) {
        const project = await ProjectModel.findOne({ owner, _id: projectId });
        if (!project) throw { status: 404, message: "project not found" };
        return project;
    }
    async getProjectById(req, res, next) { 
        try {
            const owner = req.user[0]._id;
            const projectId = req.params.id;
            const project = await this.findProject(projectId, owner);
            project.image = createLinkForFiles(project.image , req)
            return res.status(200).json({
                status: 200,
                success: true,
                project,
            });
        } catch (err) {
            next(err);
        }
    }
    async removeProject(req, res, next) {
        try {
            const owner = req.user[0]._id;
            const projectId = req.params.id;
            await this.findProject(projectId, owner);
            const deleteProjectResult = await ProjectModel.deleteOne({
                _id: projectId,
            });
            if (deleteProjectResult.deletedCount == 0)
                throw { status: 400, message: "project did not delete" };
            return res.status(200).json({
                status: 200,
                success: true,
                message: "project deleted suucessfully",
            });
        } catch (err) {
            next(err);
        }
    }
    async updateProject(req, res, next) {
        try {
            const owner = req.user[0]._id;
            const projectId = req.params.id;
            const project = await this.findProject(projectId, owner);
            const data = { ...req.body };
            Object.entries(data).forEach(([key, value]) => {
                if (!["title", "text", "tags"].includes(key)) delete data[key];
                if (["", " ", 0, null, undefined, NaN].includes(value))
                    delete data[key];
                if (key == "tags" && data["tags"].constructor == Array) {
                    console.log(data["tags"].constructor == Array);
                    data["tags"] = data["tags"].filter((val) => {
                        if (!["", " ", 0, null, undefined, NaN].includes(val))
                            return val;
                    });
                }
                if (data["tags"].length == 0) delete data["tags"];
            });
            console.log(data);
            const updateResult = await ProjectModel.updateOne(
                { _id: projectId, owner },
                { $set: data }
            );
            if (updateResult.modifiedCount == 0)
                throw { status: 400, message: "updating was not successfull" };
            return res.status(200).json({
                status: 200,
                success: true,
                message: "update done!",
            });
        } catch (err) {
            next(err);
        }
    }
    async updateProjectImage(req, res, next) {
        try {
            const { image } = req.body.image;
            const owner = req.user[0]._id;
            const projectId = req.params.id;
            await this.findProject(projectId, owner);
            const updateResult = await ProjectModel.updateOne(
                { _id: projectId },
                { $set: { image } }
            );
            if (updateResult.modifiedCount == 0)
                throw { status: 400, message: "updating was not successfull" };
            return res.status(200).json({
                status: 200,
                success: true,
                message: "update done!",
            });
        } catch (err) {
            next(err);
        }
    }
    getProjectOfUser() {}
}

module.exports = {
    ProjectController: new ProjectController(),
};
