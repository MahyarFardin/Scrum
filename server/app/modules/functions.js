const { genSaltSync, hashSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

function hashString(str) {
    const salt = genSaltSync(10);
    return hashSync(str, salt);
}

function tokenGenerator(payload) {
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "3days",
    });
    return token;
}

function verifyJwtToken(token) {
    const result = jwt.verify(token, process.env.SECRET_KEY);
    if (!result?.username) throw { status: 401, message: "please login" };
    return result;
}

function createUploadPath() {
    const d = new Date();
    const year = "" + d.getFullYear();
    const month = "" + d.getMonth();
    const day = "" + d.getDay();
    const uploadPath = path.join(
        __dirname,
        "..",
        "..",
        "public",
        "upload",
        year,
        month,
        day
    );
    fs.mkdirSync(uploadPath, { recursive: true });
    return path.join("public", "upload", year, month, day);
}

function createLinkForFiles(fileAddress,req){
    return fileAddress? `${req.protocol}://${req.get('host')}/${fileAddress.split(`\\`).join("/")}` :undefined
}

module.exports = {
    hashString,
    tokenGenerator,
    verifyJwtToken,
    createUploadPath,
    createLinkForFiles
};
