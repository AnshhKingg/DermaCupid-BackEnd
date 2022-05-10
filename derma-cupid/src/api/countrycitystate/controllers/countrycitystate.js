'use strict';

/**
 * A set of functions called "actions" for `countrycitystate`
 */

module.exports = {
  allCountries: async (ctx, next) => {
    try {
      const data = await strapi.db.query('api::register-country.register-country').findMany({
        populate: true
      });
      ctx.body = data
      return ctx
    } catch (err) {
      ctx.body = err;
    }
  },
  particularCountry: async (ctx, next) => {
    try {
      let country = ctx.request.params.country
      const data = await strapi.db.query('api::register-country.register-country').findMany({
        populate: true,
        where: {country}
      });
      try{
        ctx.body = data[0]
        return ctx
      }
      catch(e){
        ctx.body = {}
        return ctx
      }
    } catch (err) {
      ctx.body = err;
    }
  },
  particularState: async (ctx, next) => {
    try {
      let state = ctx.request.params.state
      const data = await strapi.db.query('api::register-city.register-city').findMany({
        populate: true,
        where: {state}
      });
      try{
        ctx.body = data[0]
        return ctx
      }
      catch(e){
        ctx.body = {}
        return ctx
      }
    } catch (err) {
      ctx.body = err;
    }
  },
  allStates: async (ctx, next) => {
    try {
      const data = await strapi.db.query('api::register-city.register-city').findMany({
        populate: true
      });
      ctx.body = data
      return ctx
    } catch (err) {
      ctx.body = err;
    }
  }
};
