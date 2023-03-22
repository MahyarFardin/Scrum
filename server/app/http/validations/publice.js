const { param } = require("express-validator");

function mongoIdValidator(){
    return [
        param("id").isMongoId().withMessage('id is nor valid')
    ]
}

module.exports = {
    mongoIdValidator
}