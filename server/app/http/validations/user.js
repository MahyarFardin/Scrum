const { body } = require("express-validator");
const path = require('path');

function imageValidator(){
    return [
        body('image').custom((image,{req})=>{
            const ext = path.extname(req.file.originalname)
            const exts = [".png" , ".jpg" , ".jpeg" , ".gif" , ".webp"]
            if(!exts.includes(ext)) throw "fromat is not valid"
            const maxSize = 2 * 1024 * 1024
            if(req.file.size > maxSize) throw 'size can not be more than 2 MB'
            return true
        })
    ]
}

module.exports = {
    imageValidator
}