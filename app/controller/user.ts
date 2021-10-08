import { Controller } from 'egg';

export default class UserController extends Controller {
  public async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const loginRes = await ctx.service.user.login(username, password);
    ctx.body = loginRes;
  }

  public async currentUser() {
    const { ctx } = this;
    const currentUser = ctx.session.currentUser;
    if (currentUser) {
      ctx.body = currentUser;
    } else {
      ctx.status = 401;
    }
  }

  public async logout() {
    const { ctx } = this;
    ctx.session = null;
    ctx.body = { success: true };
  }
}
