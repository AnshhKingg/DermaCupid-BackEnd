'use strict';

/**
 * register-diet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-diet.register-diet');
