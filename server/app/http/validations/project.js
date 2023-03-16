const { body } = require("express-validator");

function createProjectValidator() {
    return [
        body("title").notEmpty().withMessage("title can not be empty"),
        body("tags")
            .isArray({ min: 0, max: 10 })
            .withMessage("max:10 , min:0 please attention"),
        body("text")
            .notEmpty()
            .isLength({ min: 10 })
            .withMessage(
                "description can not be empty and min lenght is 20 char"
            ),
    ];
}

module.exports = {
    createProjectValidator,
};
