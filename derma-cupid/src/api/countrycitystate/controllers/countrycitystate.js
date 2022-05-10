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
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
  particularState: async (ctx, next) => {
    try {
      ctx.body = 'ok';
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
