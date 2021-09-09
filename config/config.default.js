/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630917961165_4313';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'postgres',
    database: process.env.WKU_ONESTOP_DB_NAME,
    host: 'localhost',
    port: 5432,
    username: process.env.WKU_ONESTOP_DB_USER,
    password: process.env.WKU_ONESTOP_DB_PASS,
    define: {
      underscored: false,
      freezeTableName: true,
      timestamps: false,
    },
    timezone: '+08:00',
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return {
    ...config,
  };
};
