const mongoose = require("mongoose");
const { AllRoutes } = require("./router/router");

module.exports = class Appication {
    #express = require("express");
    #app = this.#express();
    constructor(PORT, DB_URL) {
        this.configApplication();
        this.createServer(PORT);
        this.configDataBase(DB_URL);
        this.createRoutes();
        this.errorHandler();
    }
    configApplication() {
        const path = require("path");
        this.#app.use(this.#express.json());
        this.#app.use(this.#express.urlencoded({ extended: false }));
        this.#app.use(
            this.#express.static(path.join(__dirname, "..", "public"))
        );
    }
    createServer(PORT) {
        const http = require("http");
        const server = http.createServer(this.#app);
        server.listen(PORT, () => {
            console.log(`server is running on port https://localhost:${PORT}`);
        });
    }
    configDataBase(DB_URL) {
        mongoose.set("strictQuery", false);
        mongoose.connect(DB_URL, (err) => {
            if (err) throw err;
            return console.log("coonect to DB successfully");
        });
    }
    errorHandler() {
        this.#app.use((req, res, next) => {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "page not found",
            });
        });
        this.#app.use((error, req, res, next) => {
            console.log(error);
            const status = error?.status || 500;
            const message = error?.message || "internalServerError";
            return res.status(status).json({
                status,
                success: false,
                message,
            });
        });
    }
    createRoutes() {
        this.#app.get("/", (req, res, next) => {
            return res.json({
                message: "this is a new express application",
            });
        });
        this.#app.use(AllRoutes);
        // this.#app.use((err, req, res, next) => {
        //     try {
        //     } catch (err) {
        //         next(err);
        //     }
        // });
    }
};
