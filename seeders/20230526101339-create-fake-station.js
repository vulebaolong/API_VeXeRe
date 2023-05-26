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
            "stations",
            [
                {
                    name: "Bến xe Miền Tây",
                    adress: "395 Đ. Kinh Dương Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh",
                    province: "HCM",
                    createdAt: "2023-05-24T11:16:32.000Z",
                    updatedAt: "2023-05-24T11:16:32.000Z",
                },
                {
                    name: "Bến Xe Miền Đông",
                    adress: "Khu công nghiệp, Cần Giuộc, Long An",
                    province: "HCM",
                    createdAt: "2023-05-24T15:46:22.000Z",
                    updatedAt: "2023-05-24T15:46:22.000Z",
                },
                {
                    name: "Bến Xe Long Xuyên",
                    adress: "392, P, Phạm Cự Lượng, Tp. Long Xuyên, An Giang",
                    province: "LX",
                    createdAt: "2023-05-24T17:51:37.000Z",
                    updatedAt: "2023-05-24T17:51:37.000Z",
                },
                {
                    name: "Bến Xe An Sương",
                    adress: "QL22, Bà Điểm, Hóc Môn, Thành phố Hồ Chí Minh",
                    province: "HCM",
                    createdAt: "2023-05-24T17:52:25.000Z",
                    updatedAt: "2023-05-24T17:52:25.000Z",
                },
                {
                    name: "Bến Xe Miền Nam",
                    adress: "13 QL1A, Thới An, Quận 12, Thành phố Hồ Chí Minh",
                    province: "HCM",
                    createdAt: "2023-05-25T06:26:12.000Z",
                    updatedAt: "2023-05-25T06:33:14.000Z",
                },
                {
                    name: "Bến Xe Sài Gòn",
                    adress: "Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh",
                    province: "HCM",
                    createdAt: "2023-05-25T10:15:25.000Z",
                    updatedAt: "2023-05-25T10:15:25.000Z",
                },
                {
                    name: "Bến Xe Cần Thơ",
                    adress: "Hưng Thành, Cái Răng, Cần Thơ",
                    province: "CT",
                    createdAt: "2023-05-25T10:28:15.000Z",
                    updatedAt: "2023-05-25T10:28:15.000Z",
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

        await queryInterface.bulkDelete("stations", null, {});
    },
};
