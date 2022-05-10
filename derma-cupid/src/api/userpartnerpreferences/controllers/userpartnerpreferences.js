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
        console.log(tokenData)
        let requiredObject = {}
        let pp = await strapi.db.query('api::partner-preference.partner-preference').findMany({
          where: {uid:UID},
          populate: true
        });

        // ctx.body = pp
        // return ctx;
        requiredObject = {...pp[0]}

        pp = await strapi.db.query('api::partner-preference-marital-status.partner-preference-marital-status').findMany({
          where: {uid:UID},
          populate: true
        });
        requiredObject['maritalStatus'] = pp

        pp = await strapi.db.query('api::partner-preference-religion.partner-preference-religion').findMany({
          where: {uid:UID},
          populate: true
        });
        requiredObject['religion'] = pp

        pp = await strapi.db.query('api::partner-preference-religion.partner-preference-religion').findMany({
          where: {uid:UID},
          populate: true
        });
        requiredObject['religion'] = pp

        pp = await strapi.db.query('api::partner-preference-skin-condition.partner-preference-skin-condition').findMany({
          where: {uid:UID},
          populate: true
        });
        requiredObject['skinCondition'] = pp

        pp = await strapi.db.query('api::partner-preference-location.partner-preference-location').findMany({
          where: {uid:UID},
          populate: true
        });
        requiredObject['location'] = pp

        ctx.body = requiredObject
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
        if("religion" in body)
        {
          // remove all
          let pp = await strapi.db.query('api::partner-preference-religion.partner-preference-religion').deleteMany({
            where: {uid:UID},
          });

          let requiredAdditions = []
          for(let i=0; i<body['religion'].length; i++)
          {
            requiredAdditions.push({
              uid: UID,
              religion: body['religion'][i]
            })
          }

          pp = await strapi.db.query('api::partner-preference-religion.partner-preference-religion').createMany({
            data: requiredAdditions,
          });

        }
        if("location" in body)
        {
          // remove all
          let pp = await strapi.db.query('api::partner-preference-location.partner-preference-location').deleteMany({
            where: {uid:UID},
          });

          let requiredAdditions = []
          for(let i=0; i<body['location'].length; i++)
          {
            requiredAdditions.push({
              uid: UID,
              country: body['location'][i]
            })
          }

          pp = await strapi.db.query('api::partner-preference-location.partner-preference-location').createMany({
            data: requiredAdditions,
          });

        }
        if("maritalStatus" in body)
        {
          // remove all
          let pp = await strapi.db.query('api::partner-preference-marital-status.partner-preference-marital-status').deleteMany({
            where: {uid:UID},
          });

          let requiredAdditions = []
          for(let i=0; i<body['maritalStatus'].length; i++)
          {
            requiredAdditions.push({
              uid: UID,
              maritalStatus: body['maritalStatus'][i]
            })
          }

          pp = await strapi.db.query('api::partner-preference-marital-status.partner-preference-marital-status').createMany({
            data: requiredAdditions,
          });
        }
        if("skinCondition" in body)
        {
            // remove all
            let pp = await strapi.db.query('api::partner-preference-skin-condition.partner-preference-skin-condition').deleteMany({
              where: {uid:UID},
            });

            let requiredAdditions = []
            for(let i=0; i<body['skinCondition'].length; i++)
            {
              requiredAdditions.push({
                uid: UID,
                skinCondition: body['skinCondition'][i]
              })
            }

            pp = await strapi.db.query('api::partner-preference-skin-condition.partner-preference-skin-condition').createMany({
              data: requiredAdditions,
            });
           
        }
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
