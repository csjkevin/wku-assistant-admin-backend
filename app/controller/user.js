'use strict';

module.exports = app => {
  return class UserController extends app.Controller {
    async login() {
      const { ctx } = this;
      const { username, password } = ctx.request.body;
      const loginRes = await ctx.service.user.login(username, password);
      ctx.body = { token: loginRes };
    }
  };
};
