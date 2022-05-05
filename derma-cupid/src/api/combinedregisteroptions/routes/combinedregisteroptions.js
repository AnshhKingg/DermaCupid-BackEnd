module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/combinedregisteroptions',
     handler: 'combinedregisteroptions.allRegisterOptions',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
