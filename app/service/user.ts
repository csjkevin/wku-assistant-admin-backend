import { Service } from 'egg';

export default class UserService extends Service {
  public async login(username: string, password: string) {
    const { ctx } = this;
    const user = await ctx.model.User.findOne({ where: { username } });
    if (user && user.password === password) {
      user.password = undefined;
      ctx.session.currentUser = user;
      return { success: true };
    }
    return { success: false, errorMessage: '用户名或密码错误' };
  }
}
