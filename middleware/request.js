"use strict";

module.exports = () => {
  return async function request(ctx, next) {
    console.log('进入全局中间件');
    if (!ctx.session.me) {
      ctx.session.me = { userId: 0 };
    }
    ctx.logger.debug("session:", ctx.session.me);
    await next();
  };
};
