'use strict';

const jwt_decode = require('jwt-decode');

/**
 * A set of functions called "actions" for `theuser`
 */

module.exports = {
  getProfile: async (ctx, next) => {
    try {
      let token = ctx.request.headers['Authorization'];
      let tokenData = jwt_decode(token);
      ctx.body = tokenData;
      return ctx;
    } catch (err) {
      ctx.body = err;
    }
  },
  updateProfile: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
};
