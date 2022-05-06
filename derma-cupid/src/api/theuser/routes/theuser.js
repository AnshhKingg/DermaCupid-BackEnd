module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/user-profile',
     handler: 'theuser.getProfile',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'PUT',
      path: '/user-profile',
      handler: 'theuser.updateProfile',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
