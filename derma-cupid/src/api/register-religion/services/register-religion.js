'use strict';

/**
 * register-religion service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-religion.register-religion');
