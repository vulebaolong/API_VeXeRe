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
            "trips",
            [
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 190000,
                    fromStation: 1,
                    toStation: 2,
                    createdAt: "2023-05-25T16:10:15.000Z",
                    updatedAt: "2023-05-25T16:35:32.000Z",
                },
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 150000,
                    fromStation: 2,
                    toStation: 3,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 200000,
                    fromStation: 3,
                    toStation: 4,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 200000,
                    fromStation: 4,
                    toStation: 5,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 200000,
                    fromStation: 5,
                    toStation: 6,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 200000,
                    fromStation: 6,
                    toStation: 7,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 200000,
                    fromStation: 1,
                    toStation: 7,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 200000,
                    fromStation: 2,
                    toStation: 6,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 200000,
                    fromStation: 3,
                    toStation: 5,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    startTime: "2023-05-30T05:14:54.000Z",
                    price: 200000,
                    fromStation: 1,
                    toStation: 4,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
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

        await queryInterface.bulkDelete("trips", null, {});
    },
};
