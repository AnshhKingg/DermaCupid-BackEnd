'use strict';

/**
 * A set of functions called "actions" for `fillup`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    let data = [
      {
        value: 'Vitiligo',
        label: 'Vitiligo',
      },
      {
        value: 'Psoriasis',
        label: 'Psoriasis',
      },
      {
        value: 'Acne',
        label: 'Acne',
      },
      {
        value: 'Eczema',
        label: 'Eczema',
      },
      {
        value: 'Dermatitis',
        label: 'Dermatitis',
      },
      {
        value: 'Scleroderma',
        label: 'Scleroderma',
      },
      {
        value: 'Albinism',
        label: 'Albinism',
      },
      {
        value: 'Alopecia',
        label: 'Alopecia',
      },
      {
        value: 'Burn',
        label: 'Burn',
      },
      {
        value: 'Scar',
        label: 'Scar',
      },
      {
        value: 'Birthmark',
        label: 'Birthmark',
      },
      {
        value: 'Neurofibroma',
        label: 'Neurofibroma',
      },
      {
        value: 'Rosacea',
        label: 'Rosacea',
      },
      {
        value: 'Ichthyosis',
        label: 'Ichthyosis',
      },
      {
        value: 'Lichen Planus',
        label: 'Lichen Planus',
      },
      {
        value: 'Melanoma',
        label: 'Melanoma',
      },
      {
        value: 'Others',
        label: 'Others',
      },
      {
        value: 'No Skin Condition',
        label: 'No Skin Condition',
      },
    ]
    
    // ctx.body = theData
    // return ctx
    for await (const d of data) {
      const entry = await strapi.db.query('api::register-skin-disease.register-skin-disease').create({
        data: {
          Value: d['value'],
          Label: d['label']
        },
      });
    }
    ctx.status = 201
    ctx.body = 'ok'
  }
};
