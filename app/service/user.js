'use strict';

const Service = require('egg').Service;
const strategies = require('../common/utils');
const crypto = require('crypto');
// const uuid = require('uuid');
const xss = require('xss');

class UserService extends Service {
  /**
   * 用户注册
   * @param {username,passwd,phone} params 
   */
  async signUp(params) {
    const ctx = this.ctx;
    const md5 = crypto.createHash('md5');
    const userName = strategies.isNonEmpty(xss(params.username), '用户格式名字出错');
    const passwd = strategies.isNonEmpty(xss(params.passwd), '密码格式出错');
    const isMobilie = strategies.isMobile(xss(params.phone), '手机格式出错');
    const result = userName || passwd || isMobilie;
    if (result) {
      ctx.body = result;
    } else {
      const phone = await ctx.model.User.findOne({ where: { phone: params.phone } });
      !phone ? (
        ctx.model.User.create({
          username: xss(params.username),
          passwd: md5.update(xss(params.passwd)).digest('hex'),
          phone: xss(params.phone)
        }),
        ctx.body = '注册成功'
      ) : 
        ctx.body = '手机号码已注册'; 
    }

    return ctx.body;
  }
  /**
   * 用户登录
   * @param {user,passwd} params 
   */
  async signIn(params) {
    const ctx = this.ctx;
    const md5 = crypto.createHash('md5');
    const user = await ctx.model.User.findOne({ where: { phone: xss(params.phone) } });
    const passwd = xss(md5.update(params.passwd).digest('hex'));
    user ? (passwd === user.dataValues.passwd ? ctx.body = '登录成功' : ctx.body = '密码出错') : ctx.body = '用户不存在';

    return ctx.body;
  }
}

module.exports = UserService;
