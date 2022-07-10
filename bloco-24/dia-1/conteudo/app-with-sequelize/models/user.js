const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  }, {
    undersored: true,
    tableName: 'Users',
  });

  return User;
};

module.exports = User;