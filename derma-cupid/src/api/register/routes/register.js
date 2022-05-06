module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/register-account',
     handler: 'register.registerAccount',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/registration-details',
      handler: 'register.registerDetails',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
