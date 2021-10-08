import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = '<h1>It works!</h1><i>WKU Assistant Admin Backend</i>';
  }
}
