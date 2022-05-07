'use strict';

const jwt_decode = require('jwt-decode');

/**
 * A set of functions called "actions" for `userpartnerpreferences`
 */

module.exports = {
  getPreferences: async (ctx, next) => {
    try {
      let token = ctx.request.headers['authorization'];
      try
      {
        let tokenData = jwt_decode(token)['data'];
        let UID = tokenData['uid'];
        let pp = await strapi.db.query('api::partner-preference.partner-preference').findMany({
          where: {uid:UID},
          populate: true
        });
        ctx.body = pp[0]
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
  updatePreferences: async (ctx, next) => {
    try {
      let token = ctx.request.headers['authorization'];
      let body = ctx.request.body;
      try
      {
        let tokenData = jwt_decode(token)['data'];
        let UID = tokenData['uid'];
        let pp = await strapi.db.query('api::partner-preference.partner-preference').updateMany({
          where: {uid:UID},
          data: body
        });
        ctx.body = {
          message: "Updated Successfully!"
        }
        ctx.status = 201
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
  }
};
