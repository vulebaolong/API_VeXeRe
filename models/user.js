"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Ticket }) {
            // define association here
            this.hasMany(Ticket, { foreignKey: "user_id", as: "userId" });
        }
    }
    User.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "Trường này không được để trống" },
                    len: {
                        args: [3, 30],
                        msg: "Độ dài phải từ 3 đến 30",
                    },
                },
            },
            numberPhone: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "Trường này không được để trống" },
                    len: {
                        args: [9, 10],
                        msg: "Độ dài phải từ 9 đến 10",
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "Trường này không được để trống" },
                    isEmail: { msg: "Trường này phải là email" },
                },
            },
            password: {
                type: DataTypes.STRING(64),
                allowNull: false,
                validate: {
                    is: { args: /[0-9]/g, msg: "Mật khẩu có vấn đề" },
                },
            },
            avatar: {
                type: DataTypes.STRING,
                defaultValue: "http://localhost:3000/public/images/avatars/default.jpg",
            },
            type: {
                type: DataTypes.STRING,
                defaultValue: "CLIENT",
                validate: {
                    isIn: {
                        args: [["CLIENT", "ADMIN"]],
                        msg: "CLIENT hoặc ADMIN",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
