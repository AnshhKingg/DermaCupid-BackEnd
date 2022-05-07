'use strict';

const jwt_decode = require('jwt-decode');

/**
 * A set of functions called "actions" for `theuser`
*/

module.exports = {
  getProfile: async (ctx, next) => {
    try {
      let token = ctx.request.headers['authorization'];
      try
      {
        let tokenData = jwt_decode(token)['data'];
        let UID = tokenData['UID'];
        let user = await strapi.db.query('api::app-user.app-user').findMany({
          where: {UID},
          populate: true
        });
        ctx.body = user[0]
        return ctx;
      }
      catch(e)
      {
        ctx.body = {
          message: 'Invalid Token'
        }
        ctx.status = 403
        return ctx;
      }
    } catch (err) {
      ctx.body = err;
    }
  },
  updateProfile: async (ctx, next) => {
    try {
      let body = ctx.request.body;
      let token = ctx.request.headers['authorization'];
      try
      {
        let tokenData = jwt_decode(token)['data'];
        let UID = tokenData['UID'];
        let user = await strapi.db.query('api::app-user.app-user').updateMany({
          where: {UID},
          data: body
        });
        user = await strapi.db.query('api::app-user.app-user').findMany({
          where: {UID},
          populate: true
        });
        ctx.status = 201;
        ctx.body = {
          data: user[0],
          message: "Updated Successfully!"
        }
        return ctx;
      }
      catch(e)
      {
        ctx.body = {
          message: 'Invalid Token'
        }
        ctx.status = 403
        return ctx;
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};
