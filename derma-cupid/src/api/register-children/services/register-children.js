'use strict';

/**
 * register-children service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-children.register-children');
