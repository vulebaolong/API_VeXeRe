const multer = require("multer");
const mkdirp = require("mkdirp");

const userAvatar = (type) => {
    mkdirp.sync(`./public/images/${type}`);

    const multerStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./public/images/${type}`);
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}_${file.originalname}`);
        },
    });

    const multerFilter = function (req, file, cb) {
        if (file.mimetype.startsWith("image")) {
            cb(null, true);
        } else {
            cb(new Error("Hình ảnh không hợp lệ"), false);
        }
    };

    const upload = multer({
        storage: multerStorage,
        fileFilter: multerFilter,
    });
    return upload.single(`${type}`);
};

module.exports = {
    userAvatar,
};
