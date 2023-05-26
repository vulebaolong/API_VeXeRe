const { Op } = require("sequelize");
const { Station } = require("../models");

const createStation = async (req, res) => {
    try {
        const { name, adress, province } = req.body;
        const newStation = await Station.create({ name, adress, province });
        res.status(201).send(newStation);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllStation = async (req, res) => {
    try {
        const { name } = req.query;
        console.log(name);
        if (name) {
            const stationList = await Station.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`,
                    },
                },
            });
            return res.status(201).send(stationList);
        }
        const stationList = await Station.findAll();
        res.status(201).send(stationList);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getOneStation = async (req, res) => {
    try {
        const { id } = req.params;
        const station = await Station.findOne({ where: { id } });
        console.log(station);
        if (!station) {
            res.status(400).send(`không tìm thấy station với id: ${id}`);
        }
        res.status(201).send(station);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateStation = async (req, res) => {
    try {
        const data = req.body;
        // const stationUpdate = await Station.findOne({ where: { id } });
        const stationUpdate = req.payload;
        if (!stationUpdate) return res.status(500).send("không tìm thấy");
        Object.keys(data).forEach((key) => {
            if (key in stationUpdate) {
                stationUpdate[key] = data[key];
            }
        });
        const stationUpdated = await stationUpdate.save();
        res.status(201).send(stationUpdated);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteStation = async (req, res) => {
    try {
        const { id } = req.params;
        const station = await Station.destroy({
            where: {
                id,
            },
        });
        if (station !== 0) res.status(201).send("đã xóa thành công");
        if (station === 0) res.status(201).send("xóa thất bại");
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createStation,
    getAllStation,
    getOneStation,
    updateStation,
    deleteStation,
};
