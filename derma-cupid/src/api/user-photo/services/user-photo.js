'use strict';

/**
 * user-photo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-photo.user-photo');
