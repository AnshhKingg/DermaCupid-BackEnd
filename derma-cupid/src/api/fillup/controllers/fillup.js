'use strict';

/**
 * A set of functions called "actions" for `fillup`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    let data = [
      'Music',
      'Movies',
      'TV Shows',
      'Shopping',
      'Travel',
      'Outdoors',
      'Reading',
      'Writing',
      'Blogging',
      'Internet',
      'Eating out',
      'Bars/Pubs',
      'Jogging',
      'Walking',
      'Gym workout',
      'Yoga ',
      'Meditation',
      'Gardening',
      'Adventure Sports',
      'Cars',
      'Bikes',
      'Gadgets',
      'Pets',
      'Tattoos',
      'Art/Handicraft',
      'Painting',
      'Photography',
      'Cooking',
      'Clean eating',
      'Sports',
      'Indoor games',
      'Video games',
      'History',
      'Politics',
      'Collectibles',
      'Social service',
      'Charity',
      'Wildlife',
      'Puzzles',
      'Crosswords',
      'Performing Arts',
      'Astronomy',
      'Astrology',
      'Theatre',
      'Religious activities',
    ]
    
    // ctx.body = theData
    // return ctx
    for await (const d of data) {
      const entry = await strapi.db.query('api::register-interest.register-interest').create({
        data: {
          Value: d
        },
      });
    }
    ctx.status = 201
    ctx.body = 'ok'
  }
};
