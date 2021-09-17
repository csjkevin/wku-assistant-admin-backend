'use strict';

module.exports = (app, name, constructor, options) => {
  const { hooks = {} } = options || {};
  const { beforeCreate = () => {}, beforeUpdate = () => {} } = hooks;
  return app.model.define(name, constructor, {
    ...options,
    hooks: {
      beforeCreate: (_record, _options) => {
        // eslint-disable-next-line no-param-reassign
        _record.createdAt = new Date();
        beforeCreate(_record, _options);
      },
      beforeUpdate: (_record, _options) => {
        // eslint-disable-next-line no-param-reassign
        _record.updatedAt = new Date();
        beforeUpdate(_record, _options);
      },
    },
  });
};
