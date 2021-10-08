'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableName = 'user';

    const columns = {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.DataTypes.STRING(16),
      },
      password: {
        type: Sequelize.DataTypes.STRING(32),
      },
    };

    await queryInterface.createTable(tableName, columns);

    for (const key of Object.keys(columns)) {
      const value = columns[key];
      try {
        await queryInterface.addColumn(tableName, key, value);
        // eslint-disable-next-line no-empty
      } catch {}
      try {
        if (value.primaryKey || value.autoIncrement) {
          value.primaryKey = undefined;
          value.autoIncrement = undefined;
          await queryInterface.changeColumn(tableName, key, value);
        }
        // eslint-disable-next-line no-empty
      } catch {}
    }
  },

  down: async (queryInterface, Sequelize) => {},
};
