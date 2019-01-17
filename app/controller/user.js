'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async findUser() {
    const _ctx = this.ctx;
    const user = await _ctx.model.User.findAll();
    _ctx.body = user;
  }
  async signUp() {
    let data = await this.service.user.signUp(this.ctx.request.body);
    this.ctx.body = data;
  }
  async signIn() {
    let data = await this.service.user.signIn(this.ctx.request.body);
    this.ctx.body = data;
  }
}

module.exports = UserController;
