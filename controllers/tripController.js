const { Trip, Station } = require("../models");

const createTrip = async (req, res) => {
    try {
        const { startTime, price, fromStation, toStation } = req.body;
        const newTrip = await Trip.create({
            startTime,
            price,
            fromStation,
            toStation,
        });
        res.status(201).send(newTrip);
    } catch (error) {
        console.log("👙  error: ", error);
        res.status(500).send(error);
    }
};

const getAllTrip = async (req, res) => {
    try {
        const Trips = await Trip.findAll({
            include: [
                {
                    model: Station,
                    as: "from",
                },
                {
                    model: Station,
                    as: "to",
                },
            ],
        });
        res.status(201).send(Trips);
    } catch (error) {
        console.log("👙  error: ", error);
        res.status(500).send(error);
    }
};

const getOneTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const Trips = await Trip.findAll({
            where: {
                id,
            },
            include: [
                {
                    model: Station,
                    as: "from",
                },
                {
                    model: Station,
                    as: "to",
                },
            ],
        });
        res.status(201).send(Trips);
    } catch (error) {
        console.log("👙  error: ", error);
        res.status(500).send(error);
    }
};

const updateTrip = async (req, res) => {
    try {
        const tripUpdate = req.payload;
        const data = req.body;
        console.log(data);
        if (!tripUpdate) return res.status(500).send("không tìm thấy");
        Object.keys(data).forEach((key) => {
            if (key in tripUpdate) {
                console.log(key);
                tripUpdate[key] = data[key];
            }
        });
        const tripUpdated = await tripUpdate.save();
        res.status(201).send(tripUpdated);
    } catch (error) {
        console.log("👙  error: ", error);
        res.status(500).send(error);
    }
};

const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const tripDelette = await Trip.destroy({
            where: {
                id,
            },
        });
        if (tripDelette !== 0) res.status(201).send("đã xóa thành công");
        if (tripDelette === 0) res.status(400).send("xóa thất bại");
    } catch (error) {
        console.log("👙  error: ", error);
        res.status(500).send(error);
    }
};

module.exports = {
    createTrip,
    getAllTrip,
    getOneTrip,
    updateTrip,
    deleteTrip,
};
