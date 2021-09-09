'use strict';

const defineModel = require('../util/defineModel');

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const User = defineModel(app, 'user', {
    username: STRING(16),
    password: STRING(32),
    createdAt: {
      type: DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DATE,
      allowNull: true,
    },
  });

  User.findByUsername = async function (username) {
    return await this.findOne({
      where: {
        username,
      },
    });
  };

  return User;
};
