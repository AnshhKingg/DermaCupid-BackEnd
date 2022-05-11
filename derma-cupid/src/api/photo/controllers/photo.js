'use strict';
const jwt_decode = require('jwt-decode');
/**
 * A set of functions called "actions" for `photo`
 */

module.exports = {
  getPhotosOfAUser: async (ctx, next) => {
    try {
      let token = ctx.request.headers['authorization'];
      try
      {
        let tokenData = jwt_decode(token)['data'];
        let UID = tokenData['uid'];
        let pp = await strapi.db.query('api::user-photo.user-photo').findMany({
          where: {
            uid: UID
          }
        });
        ctx.body = pp
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
  uploadAUserPhoto: async (ctx, next) => {
    try {
      let token = ctx.request.headers['authorization'];
      try
      {
        let tokenData = jwt_decode(token)['data'];
        let UID = tokenData['uid'];
        let link = ctx.request.body['link']

        let pp = await strapi.db.query('api::user-photo.user-photo').findMany({
          where: {
            uid: UID,
          }
        });

        if(pp.length === 6)
        {
          ctx.body = {
            message: "Already Uploaded 6 Photos"
          }
          ctx.status = 401
          return ctx;
        }

        pp = await strapi.db.query('api::user-photo.user-photo').create({
          data: {
            uid: UID,
            pictureLink: link
          }
        });

        ctx.status = 201
        ctx.body = pp
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
  deleteAPhoto: async (ctx, next) => {
    try {
      let token = ctx.request.headers['authorization'];
      try
      {
        let tokenData = jwt_decode(token)['data'];
        let UID = tokenData['uid'];
        let id = ctx.request.params.id
        let pp = await strapi.db.query('api::user-photo.user-photo').deleteMany({
          where: {
            id: id,
          }
        });
        ctx.body = {
          message: "Deleted Successfully!"
        }
        ctx.status = 201;
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
  verificationOfAPhoto: async (ctx, next) => {
    try {
      let token = ctx.request.headers['authorization'];
      try
      {
        let tokenData = jwt_decode(token)['data'];
        let UID = tokenData['uid'];
        let id = ctx.request.params.id;
        let isApproved = ctx.request.body['isApproved'];
        if(isApproved)
        {
          let pp = await strapi.db.query('api::user-photo.user-photo').updateMany({
            where: {
              id: id,
            },
            data: {
              isApproved: true
            }
          });
          ctx.body = {
            message: "Updated Successfully!"
          }
          ctx.status = 201;
          return ctx;
        }
        let pp = await strapi.db.query('api::user-photo.user-photo').deleteMany({
          where: {
            id: id,
          }
        });
        ctx.body = {
          message: "Updated Successfully!"
        }
        ctx.status = 201;
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