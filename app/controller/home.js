'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>It works!</h1><i>WKU One-Stop Backend</i>';
  }
}

module.exports = HomeController;
