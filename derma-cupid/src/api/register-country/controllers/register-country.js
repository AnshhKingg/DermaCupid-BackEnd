'use strict';

/**
 *  register-country controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::register-country.register-country');
