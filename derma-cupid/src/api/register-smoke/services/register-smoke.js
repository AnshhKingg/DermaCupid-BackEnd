'use strict';

/**
 * register-smoke service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-smoke.register-smoke');
