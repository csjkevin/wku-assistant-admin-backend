'use strict';

const { v4: uuidv4 } = require('uuid');

const serviceName = 'wku-onestop';

module.exports = app => {
  return class UserService extends app.Service {
    async login(username, password) {
      const { ctx, app } = this;
      const user = await ctx.model.User.findByUsername(username);
      delete user.password;
      if (user.password === password) {
        const token = uuidv4();
        await app.redis.set(`${serviceName}:session:${token}:string`, user);
        return token;
      }
      return '';
    }
  };
};
