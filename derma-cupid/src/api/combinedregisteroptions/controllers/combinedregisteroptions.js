'use strict';

/**
 * A set of functions called "actions" for `combinedregisteroptions`
 */

module.exports = {
  allRegisterOptions: async (ctx, next) => {
    let requiredObject = {}
    let entry = await strapi.db.query('api::register-children.register-children').findMany({
      where: {},
      populate: true
    });
    requiredObject['children'] = entry;
    entry = await strapi.db.query('api::register-diet.register-diet').findMany({
      where: {},
      populate: true
    });
    requiredObject['diet'] = entry;
    entry = await strapi.db.query('api::register-drink.register-drink').findMany({
      where: {},
      populate: true
    });
    requiredObject['drink'] = entry;
    entry = await strapi.db.query('api::register-education-field.register-education-field').findMany({
      where: {},
      populate: true
    });
    requiredObject['educationField'] = entry;
    entry = await strapi.db.query('api::register-highest-education.register-highest-education').findMany({
      where: {},
      populate: true
    });
    requiredObject['highestEducation'] = entry;
    entry = await strapi.db.query('api::register-interest.register-interest').findMany({
      where: {},
      populate: true
    });
    requiredObject['interest'] = entry;
    entry = await strapi.db.query('api::register-marital.register-marital').findMany({
      where: {},
      populate: true
    });
    requiredObject['maritalStatus'] = entry;
    entry = await strapi.db.query('api::register-privacy.register-privacy').findMany({
      where: {},
      populate: true
    });
    requiredObject['privacy'] = entry;
    entry = await strapi.db.query('api::register-profession.register-profession').findMany({
      where: {},
      populate: true
    });
    requiredObject['profession'] = entry;
    entry = await strapi.db.query('api::register-religion.register-religion').findMany({
      where: {},
      populate: true
    });
    requiredObject['religion'] = entry;
    entry = await strapi.db.query('api::register-skin-disease.register-skin-disease').findMany({
      where: {},
      populate: true
    });
    requiredObject['skinDisease'] = entry;
    entry = await strapi.db.query('api::register-smoke.register-smoke').findMany({
      where: {},
      populate: true
    });
    requiredObject['smokes'] = entry;
  }
};
