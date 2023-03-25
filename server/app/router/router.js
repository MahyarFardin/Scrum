const { authRoutes } = require("./auth");
const { projectRoutes } = require("./project");
const { teamRoutes } = require("./team");
const { userRoutes } = require("./user");

const rourter = require("express").Router();

rourter.use("/auth", authRoutes);
rourter.use("/project", projectRoutes);
rourter.use("/team", teamRoutes);
rourter.use("/user", userRoutes);

module.exports = {
    AllRoutes: rourter,
};
