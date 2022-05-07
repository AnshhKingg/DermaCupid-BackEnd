module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/user-partner-preferences',
     handler: 'userpartnerpreferences.getPreferences',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'PUT',
      path: '/user-partner-preferences',
      handler: 'userpartnerpreferences.updatePreferences',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
