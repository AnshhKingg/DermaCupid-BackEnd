'use strict';

/**
 *  register-smoke controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::register-smoke.register-smoke');
