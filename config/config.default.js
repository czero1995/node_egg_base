'use strict';
module.exports = appInfo => {
  const config = exports = {
    security: {
      csrf: {
        enable: false
      }
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547033978421_3854';

  // add your config here
  config.middleware = [];

  config.sequelize = { // egg-sequelize 配置
    dialect: "mysql", // db type
    database: 'egg',
    host: "localhost",
    port: "3306",
    username: "root",
    password: "qwer"
  };

  // config.mysql = {
  //   client: {
  //     host: "localhost",
  //     port: "3306",
  //     user: "root",
  //     password: "qwer",
  //     database: 'egg',

  //   },
  //   app: true,
  //   agent: false
  // };
  

  return config;
};
