'use strict';

/**
 * trust-score service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trust-score.trust-score');
