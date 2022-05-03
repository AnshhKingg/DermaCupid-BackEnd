"use strict";

/**
 * A set of functions called "actions" for `thetestuser`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      let theFName = ctx.request.params.FName;
      const entry = await strapi.db.query("api::test-user.test-user").findMany({
        where: { FName: theFName },
      });
      ctx.response.status = 200;
      ctx.body = entry;
    } catch (err) {
      //////////////////
      ctx.body = err;
    }
  },
  addAUser: async (ctx, next) => {
    try {
      let body = ctx.request.body;
      const entry = await strapi.db.query("api::test-user.test-user").create({
        data: body,
      });
      ctx.response.status = 201;
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
