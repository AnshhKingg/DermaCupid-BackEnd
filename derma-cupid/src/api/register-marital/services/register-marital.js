'use strict';

/**
 * register-marital service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-marital.register-marital');
