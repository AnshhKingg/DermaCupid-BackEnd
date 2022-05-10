'use strict';

/**
 * register-country service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-country.register-country');
