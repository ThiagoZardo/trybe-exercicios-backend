'use strict';
module.exports = (sequelize, Datatypes) => {
  const Book = sequelize.define('Book', {
    title: Datatypes.STRING,
    author: Datatypes.STRING,
    pageQuantity: Datatypes.INTEGER,
    createdAt: Datatypes.DATE,
    updatedAt: Datatypes.DATE,
  }, {
    underscored: true,
    tableName: 'Books',
  });

  return Book;
}