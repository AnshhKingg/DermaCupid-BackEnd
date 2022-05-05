'use strict';

/**
 * register-profession service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-profession.register-profession');
