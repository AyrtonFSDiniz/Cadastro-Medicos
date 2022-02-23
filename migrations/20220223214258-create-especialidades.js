'use strict';

const { DataType } = require('sequelize-typescript');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('especialidades', {
      nome_especialidade: {
        type: DataType.CHAR,
        allowNull: false,
      },
      medicosId: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      createdAt: DataType.DATE,
      updatedAt: DataType.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('especialidades');
  },
};
