module.exports = {
  development: {
    dialect: 'postgres',
    database: process.env.WKU_ASSISTANT_ADMIN_DB_NAME,
    host: 'localhost',
    port: 5432,
    username: process.env.WKU_ASSISTANT_ADMIN_DB_USER,
    password: process.env.WKU_ASSISTANT_ADMIN_DB_PASS,
    operatorsAliases: false,
  },
};
