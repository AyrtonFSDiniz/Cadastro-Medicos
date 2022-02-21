'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Especialidades', [
      {
        id: '1',
        nome_especialidade: 'Angiologia',
        createdAt: '9999-12-30 23:59:58',
        updatedAt: '9999-12-30 23:59:58',
      },
      {
        id: '2',
        nome_especialidade: 'Buco maxilo',
        createdAt: '9999-12-29 23:59:57',
        updatedAt: '9999-12-29 23:59:57',
      },
      {
        id: '3',
        nome_especialidade: 'Cardiologia clínica',
        createdAt: '9999-12-28 23:59:56',
        updatedAt: '9999-12-28 23:59:56',
      },
      {
        id: '4',
        nome_especialidade: 'Cardiologia infantil',
        createdAt: '9999-12-27 23:59:56',
        updatedAt: '9999-12-27 23:59:56',
      },
      {
        id: '5',
        nome_especialidade: 'Cirurgia cabeça e pescoço',
        createdAt: '9999-12-26 23:59:55',
        updatedAt: '9999-12-26 23:59:55',
      },
      {
        id: '6',
        nome_especialidade: 'Cirurgia cardíaca',
        createdAt: '9999-12-25 23:59:54',
        updatedAt: '9999-12-25 23:59:54',
      },
      {
        id: '7',
        nome_especialidade: 'Cirurgia de tórax',
        createdAt: '9999-12-24 23:59:53',
        updatedAt: '9999-12-24 23:59:53',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Especialidades', null, {});
  },
};
