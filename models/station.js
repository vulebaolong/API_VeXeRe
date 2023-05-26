"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Station extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Trip }) {
            this.hasMany(Trip, { foreignKey: "fromStation", as: "from" });
            this.hasMany(Trip, { foreignKey: "toStation", as: "to" });
        }
    }
    Station.init(
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
            adress: DataTypes.STRING,
            province: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    isIn: {
                        args: [["HCM", "ĐN", "LX", "CT"]],
                        msg: "phải là HCM, ĐN, LX, CT",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "Station",
        }
    );
    return Station;
};
