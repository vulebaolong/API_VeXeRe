const express = require("express");
const { sequelize } = require("./models");
const path = require("path");
const { rootRouter } = require("./routers");

const app = express();

// cài ứng dụng sử dung json
app.use(express.json());

// cài đặt static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

// dùng Router
app.use("/api/v1", rootRouter);

// lắng nghe
const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Lắng nghe cổng http://localhost:${port} ...`);
    try {
        await sequelize.authenticate();
        console.log("Kết nối database thành công.");
    } catch (error) {
        console.error("Không thể kết nối với database:", error);
    }
});
