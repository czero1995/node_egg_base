"use strict";
const Controller = require("egg").Controller;
const { Get, Prefix } = require('egg-shell-decorators');
@Prefix("/api")
class IndexController extends Controller {
  @Get("/index") 
  async index() {
    console.log('errror');
    this.ctx.body = "1234";
  }
}

module.exports = IndexController;