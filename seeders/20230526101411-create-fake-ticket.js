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
            "tickets",
            [
                {
                    user_id: 1,
                    trip_id: 3,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    user_id: 2,
                    trip_id: 2,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    user_id: 3,
                    trip_id: 1,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    user_id: 4,
                    trip_id: 1,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    user_id: 5,
                    trip_id: 2,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    user_id: 5,
                    trip_id: 1,
                    createdAt: "2023-05-25T16:11:02.000Z",
                    updatedAt: "2023-05-25T16:11:02.000Z",
                },
                {
                    user_id: 5,
                    trip_id: 3,
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
        await queryInterface.bulkDelete("tickets", null, {});
    },
};
