module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/fillup',
     handler: 'fillup.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
