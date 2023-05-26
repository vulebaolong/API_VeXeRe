const { User, sequelize } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { name, numberPhone, email, password: passwordRaw, type } = req.body;

        // tạo ra một chuỗi ngẫu nhiên
        const salt = bcryptjs.genSaltSync(12);

        // mã hóa salt + password
        const password = bcryptjs.hashSync(passwordRaw, salt);

        const newUser = await User.create({
            name,
            numberPhone,
            email,
            password,
            type,
        });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (!user) res.status(500).send("email hoặc mật khẩu không đúng");

        const isAuth = bcryptjs.compareSync(password, user.password);
        if (!isAuth) res.status(500).send("email hoặc mật khẩu không đúng");

        const token = jwt.sign({ email: user.email, type: user.type }, "994769487", {
            expiresIn: 60 * 60,
        });
        res.status(200).send({
            mesage: "Đăng nhập thành công",
            token,
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.destroy({
            where: {
                id,
            },
        });
        if (user !== 0) res.status(201).send("đã xóa thành công");
        if (user === 0) res.status(201).send("xóa thất bại");
    } catch (error) {
        res.status(500).send(error);
    }
};

// lưu vào database
const uploadAvatar = async (req, res) => {
    try {
        const { file } = req;
        const { email } = req.user;
        const urlImage = `http://${req.header("host")}/${file.path}`;
        const user = await User.findOne({
            where: {
                email,
            },
        });
        user.avatar = urlImage;
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllUser = async (req, res) => {
    try {
        const Users = await User.findAll();
        res.status(201).send(Users);
    } catch (error) {
        console.log("👙  error: ", error);
        res.status(500).send(error);
    }
};

const getAllTripOfAllUser = async (req, res) => {
    try {
        const [results] = await sequelize.query(
            `select users.name as fullName, fromSta.name as fromStation, toSta.name as toStation, trips.startTime, trips.price
            from users
            inner join tickets on users.id = tickets.user_id
            inner join trips on trips.id = tickets.trip_id
            inner join stations as fromSta on fromSta.id = trips.fromStation
            inner join stations as toSta on toSta.id = trips.toStation`
        );
        res.status(201).send({ results });
    } catch (error) {
        console.log("👙  error: ", error);
        res.status(500).send(error);
    }
};

const getAllTripOfOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await sequelize.query(
            `select users.name as fullName, fromSta.name as fromStation, toSta.name as toStation, trips.startTime, trips.price
            from users
            inner join tickets on users.id = tickets.user_id
            inner join trips on trips.id = tickets.trip_id
            inner join stations as fromSta on fromSta.id = trips.fromStation
            inner join stations as toSta on toSta.id = trips.toStation
            where users.id = "${id}"`
        );
        res.status(201).send({ results });
    } catch (error) {
        console.log("👙  error: ", error);
        res.status(500).send(error);
    }
};

module.exports = {
    register,
    login,
    deleteById,
    uploadAvatar,
    getAllUser,
    getAllTripOfAllUser,
    getAllTripOfOneUser,
};
