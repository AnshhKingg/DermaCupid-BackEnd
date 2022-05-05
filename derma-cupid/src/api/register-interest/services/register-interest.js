'use strict';

/**
 * register-interest service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-interest.register-interest');
