"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert(
            "users",
            [
                {
                    name: "Nguyễn Thị Ái Vy",
                    numberPhone: 836789578,
                    email: "AiVy@gmail.com",
                    password:
                        "$2a$12$TWK.XYrw3qXviTZr7nA6kuTiuNc/KT0aKgPuHS5wliMRxZE268HFq",
                    avatar: "http://localhost:3000/public/images/avatars/default.jpg",
                    type: "ADMIN",
                    createdAt: "2023-05-25T12:13:23.000Z",
                    updatedAt: "2023-05-25T12:14:54.000Z",
                },
                {
                    name: "Nguyễn Thị Huỳnh Nhi",
                    numberPhone: 836789578,
                    email: "huynhnhi@gmail.com",
                    password:
                        "$2a$12$QVSW5YKm/VNdmgmtCYBU3epZSqWN7ggFXEXNTExo6YpAJncjmWXmC",
                    avatar: "http://localhost:3000/public/images/avatars/default.jpg",
                    type: "ADMIN",
                    createdAt: "2023-05-25T12:15:33.000Z",
                    updatedAt: "2023-05-25T14:52:03.000Z",
                },
                {
                    name: "Vũ Lê Bảo Long",
                    numberPhone: 836789578,
                    email: "vulebaolong@gmail.com",
                    password:
                        "$2a$12$RBUJO/J2Ppsmm4G5gFedpOn7fgCamcOndyhosZfPhoY589pgap16y",
                    avatar: "http://localhost:3000/public/images/avatars/default.jpg",
                    type: "ADMIN",
                    createdAt: "2023-05-25T12:19:01.000Z",
                    updatedAt: "2023-05-25T12:19:01.000Z",
                },
                {
                    name: "Vũ Lê Thanh Lâm",
                    numberPhone: 836789578,
                    email: "vulethanhlam@gmail.com",
                    password:
                        "$2a$12$uAaM8bD0dBTkMaeYi1A1F.ERTnJLLAkv4p2RjTTRUqiA1fnxgASEW",
                    avatar: "http://localhost:3000/public/images/avatars/default.jpg",
                    type: "ADMIN",
                    createdAt: "2023-05-25T12:20:20.000Z",
                    updatedAt: "2023-05-25T12:20:20.000Z",
                },
                {
                    name: "Vũ Thanh Sơn",
                    numberPhone: 836789578,
                    email: "vuthanhson@gmail.com",
                    password:
                        "$2a$12$uAaM8bD0dBTkMaeYi1A1F.ERTnJLLAkv4p2RjTTRUqiA1fnxgASEW",
                    avatar: "http://localhost:3000/public/images/avatars/default.jpg",
                    type: "ADMIN",
                    createdAt: "2023-05-25T12:20:20.000Z",
                    updatedAt: "2023-05-25T12:20:20.000Z",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("users", null, {});
    },
};
