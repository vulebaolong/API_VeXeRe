const checkExit = (Model) => {
    return async (req, res, next) => {
        const { id } = req.params;
        const result = await Model.findOne({ where: { id } });

        if (!result) return res.status(404).send(`không tìm thấy id ${id}`);

        req.payload = result;
        return next();
    };
};

const checkEmailUnique = (Model) => {
    return async (req, res, next) => {
        const { email } = req.body;

        const result = await Model.findOne({ where: { email } });

        if (result) return res.status(404).send(`Tài khoản ${email} đã tồn tại`);

        return next();
    };
};

module.exports = {
    checkExit,
    checkEmailUnique,
};
