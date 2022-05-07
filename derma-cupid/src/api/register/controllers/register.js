'use strict';
var jwt = require('jsonwebtoken');

const JWT_TOKEN = "LxDy9qxCcayHUvRn5Vrw8mzbqivmNTMGTb9vJw2WLZI66NZDTnfAlESeAF1WxQqnq8sPr12bImLX8DKJiA15nmdUgP9MSJKM9RjqoCIO4LeAyAO1oZaIYmXybrVCTKib1yHzevwxog4EL50ZTHLkXUejXJFRUngOTCATEPE2sdqrErWErcmKKvmsF9vMwbtLvHSvViXrNtxJACebkBeMXGu3qWMYHGiyoO052Yp3LWSoQpjBGw8js52wk0SMAOQO7"


/**
 * A set of functions called "actions" for `register`
 */

module.exports = {
  registerAccount: async (ctx, next) => {
    // try {
      let body = ctx.request.body
      let UID = body['UID']

      // initially send me just the UID and Phone Number
      let entry = await strapi.db.query('api::app-user.app-user').findMany({
        where: {UID},
        populate: true
      });

      //check if UID already exists
      if(entry.length > 0)
      {
        //if yes check if profile completed
        if(entry[0]['HasCompletedRegistration'])
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
    // } catch (err) {
    //   ctx.body = err;
    // }
  },
  registerDetails: async (ctx, next) => {
    // try {
      let body = ctx.request.body;
      // update hasSigned up
      body['HasCompletedRegistration'] = true
      let UID = body['UID'];

      let entry = await strapi.db.query('api::app-user.app-user').findMany({
        where: {UID},
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

      console.log("Hey")
      console.log(body)
      let updateEntry = await strapi.db.query('api::app-user.app-user').updateMany({
        where: {UID},
        data: body
      });

      console.log("Hey2")

      entry = await strapi.db.query('api::app-user.app-user').findMany({
        where: {UID},
        populate: true
      });

      entry = entry[0]

      let thePPBody = {
        UID: entry['UID'],
        Religion: {
          "data": [
            "Doesn't Matter"
          ]
        },
        SkinConditions: {
          "data": [
            "Doesn't Matter"
          ]
        },
        LocationCountries: {
          "data": [
            "Doesn't Matter"
          ]
        }
      }

      if(entry['Gender'] == 'Male')
      {
        thePPBody['AgeFrom'] = 18
        thePPBody['AgeTill'] = 27
      }
      else
      {
        thePPBody['AgeFrom'] = 21
        thePPBody['AgeTill'] = 27
      }

      if(entry['MaritalStatus'] == "Never Married")
      {
        thePPBody['MaritalStatus'] = {
          "data": [
            "Doesn't Matter"
          ]
        }
      }

      let pp = await strapi.db.query('api::partner-preference.partner-preference').findMany({
        where: {
          UID: entry['UID']
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

    // } catch (err) {
    //   ctx.body = err;
    // }
  }
};
