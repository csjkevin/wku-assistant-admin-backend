module.exports = (app, name, constructor, options) => {
  const { hooks = {} } = options || {};
  const { beforeCreate = () => {}, beforeUpdate = () => {} } = hooks;
  return app.model.define(name, constructor, {
    ...options,
    hooks: {
      beforeCreate: (record, options) => {
        record.createdAt = new Date();
        beforeCreate(record, options);
      },
      beforeUpdate: (record, options) => {
        record.updatedAt = new Date();
        beforeUpdate(record, options);
      },
    },
  });
};
