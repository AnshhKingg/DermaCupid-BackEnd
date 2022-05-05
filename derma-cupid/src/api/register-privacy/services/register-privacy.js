'use strict';

/**
 * register-privacy service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-privacy.register-privacy');
