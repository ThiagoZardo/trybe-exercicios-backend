'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Stores', [
      {
        name: 'Magazine',
        description: 'Loja de eletros',
      },
      {
        name: 'Tem de tudo',
        description: 'Temos de tudo para o seu lar'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Stores', null, {});
  }
};
