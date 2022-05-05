module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/combinedregisteroptions/all',
     handler: 'combinedoptions.allRegisterOptions',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'GET',
      path: '/combined',
      handler: 'combinedoptions.all',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
