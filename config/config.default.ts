import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = `${appInfo.name}_1630917961165_4313`;

  config.middleware = [];

  config.sequelize = {
    dialect: 'postgres',
    database: process.env.WKU_ASSISTANT_ADMIN_DB_NAME,
    host: 'localhost',
    port: 5432,
    username: process.env.WKU_ASSISTANT_ADMIN_DB_USER,
    password: process.env.WKU_ASSISTANT_ADMIN_DB_PASS,
    define: {
      underscored: false,
      freezeTableName: true,
      timestamps: false,
    },
    timezone: '+08:00',
    operatorsAliases: false,
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

  const bizConfig = {};

  return {
    ...config,
    ...bizConfig,
  };
};
