'use strict';

/**
 * register-city service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-city.register-city');
