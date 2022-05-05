'use strict';

/**
 * register-smoke router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::register-smoke.register-smoke');
