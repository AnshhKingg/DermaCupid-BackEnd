'use strict';

/**
 * register-drink service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-drink.register-drink');
