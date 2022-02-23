'use strict';

const { DataType } = require('sequelize-typescript');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('medicos', {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataType.STRING(),
        allowNull: false,
        validate: {
          len: [1, 120],
        },
      },
      CRM: {
        type: DataType.INTEGER(),
        allowNull: false,
        validate: {
          len: [0, 7],
        },
      },
      telefone_fixo: {
        type: DataType.BIGINT(),
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      telefone_celular: {
        type: DataType.BIGINT(),
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
      cep: {
        type: DataType.BIGINT(),
        allowNull: false,
        validate: {
          len: [1, 8],
        },
      },
      createdAt: DataType.DATE,
      updatedAt: DataType.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('medicos');
  },
};
