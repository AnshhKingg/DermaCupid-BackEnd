'use strict';
var jwt = require('jsonwebtoken');

const JWT_TOKEN = "LxDy9qxCcayHUvRn5Vrw8mzbqivmNTMGTb9vJw2WLZI66NZDTnfAlESeAF1WxQqnq8sPr12bImLX8DKJiA15nmdUgP9MSJKM9RjqoCIO4LeAyAO1oZaIYmXybrVCTKib1yHzevwxog4EL50ZTHLkXUejXJFRUngOTCATEPE2sdqrErWErcmKKvmsF9vMwbtLvHSvViXrNtxJACebkBeMXGu3qWMYHGiyoO052Yp3LWSoQpjBGw8js52wk0SMAOQO7"


/**
 * A set of functions called "actions" for `register`
 */

module.exports = {
  registerAccount: async (ctx, next) => {
    try {
      let body = ctx.request.body
      let UID = body['uid']

      // initially send me just the UID and Phone Number
      let entry = await strapi.db.query('api::app-user.app-user').findMany({
        where: {uid:UID},
        populate: true
      });

      //check if UID already exists
      if(entry.length > 0)
      {
        //if yes check if profile completed
        if(entry[0]['hasCompletedRegistration'])
        {
          // return token saying its okay to go for listing
          let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 45),
            data: entry[0]
          }, JWT_TOKEN);

          ctx.body = {
            token,
            isRegistrationComplete: true,
            isNewlyRegistered: false
          }
          ctx.status = 201

          return ctx;
        }
        else
        {
          // Say the profile is incomplete
          let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 45),
            data: entry[0]
          }, JWT_TOKEN);

          ctx.body = {
            token,
            isRegistrationComplete: false,
            isNewlyRegistered: false
          }
          ctx.status = 201;
          return ctx;
        }
      }
      else
      {
        body['interests'] = {
          data: []
        }
        // if no, create
        let newEntry = await strapi.db.query('api::app-user.app-user').create({
          data: body
        });

        let token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 45),
          data: newEntry
        }, JWT_TOKEN);

        ctx.body = {
          token,
          isRegistrationComplete: false,
          isNewlyRegistered: true
        }
        ctx.status = 201
        return ctx;
      }
    } catch (err) {
      ctx.body = err;
    }
  },
  registerDetails: async (ctx, next) => {
    try {
      let body = ctx.request.body;
      // update hasSigned up
      body['hasCompletedRegistration'] = true
      let UID = body['uid'];

      let entry = await strapi.db.query('api::app-user.app-user').findMany({
        where: {uid:UID},
        populate: true
      });

      if(entry.length == 0)
      {
        ctx.body = {
          message: 'Kindly Register with UID first'
        }
        ctx.status = 404

        return ctx;
      }

      // enter the details

      let updateEntry = await strapi.db.query('api::app-user.app-user').updateMany({
        where: {uid:UID},
        data: body
      });


      entry = await strapi.db.query('api::app-user.app-user').findMany({
        where: {uid:UID},
        populate: true
      });

      entry = entry[0]

      let thePPBody = {
        uid: entry['uid'],
        religion: {
          "data": [
            "Doesn't Matter"
          ]
        },
        skinConditions: {
          "data": [
            "Doesn't Matter"
          ]
        },
        locationCountries: {
          "data": [
            "Doesn't Matter"
          ]
        }
      }

      if(entry['gender'] == 'Male')
      {
        thePPBody['ageFrom'] = 18
        thePPBody['ageTill'] = 27
      }
      else
      {
        thePPBody['ageFrom'] = 21
        thePPBody['ageTill'] = 27
      }

      if(entry['maritalStatus'] == "Never Married")
      {
        thePPBody['maritalStatus'] = {
          "data": [
            "Doesn't Matter"
          ]
        }
      }

      let pp = await strapi.db.query('api::partner-preference.partner-preference').findMany({
        where: {
          uid: entry['uid']
        }
      });

      if(pp.length == 0)
      {
        let newPartnerPreference = await strapi.db.query('api::partner-preference.partner-preference').create({
          data: thePPBody
        });
      }

      let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 45),
        data: entry
      }, JWT_TOKEN);

      ctx.body = {
        token,
        isRegistrationComplete: true,
        isNewlyRegistered: false
      }
      ctx.status = 201
      return ctx;

    } catch (err) {
      ctx.body = err;
    }
  }
};
