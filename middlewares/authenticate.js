const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    try {
        const token = req.header("token");
        const decode = jwt.verify(token, "994769487");
        if (!decode) throw new Error();

        req.user = decode;
        return next();
    } catch (error) {
        res.status(500).send("Bạn chưa đăng nhập");
    }
};

const authorize = (roles) => {
    return (req, res, next) => {
        const { type } = req.user;
        if (!roles.includes(type))
            return res.status(404).send(`${type}: không đủ quyền để thực hiện`);
        return next();
    };
};

module.exports = {
    protect,
    authorize,
};
