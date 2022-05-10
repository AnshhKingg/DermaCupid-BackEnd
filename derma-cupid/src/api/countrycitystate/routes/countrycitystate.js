module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/countries/all',
     handler: 'countrycitystate.allCountries',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'GET',
      path: '/country/:country',
      handler: 'countrycitystate.particularCountry',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/state/:state',
      handler: 'countrycitystate.particularState',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/states/all',
      handler: 'countrycitystate.allStates',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
