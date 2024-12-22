'use strict';

/**
 * schedule-timing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-timing.schedule-timing');
