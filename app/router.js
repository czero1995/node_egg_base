'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/user/finduser', controller.user.findUser);
  router.post('/api/user/signup', controller.user.signUp);
  router.post('/api/user/signin', controller.user.signIn);
  // router.get('/*', request, controller.home.index);
};
