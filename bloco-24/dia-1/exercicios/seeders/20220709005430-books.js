'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Livro criado pelo seed',
        author: 'Novo Autor',
        page_quantity: 199,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {},
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete(
    'Books', null, {}
  ),
};
