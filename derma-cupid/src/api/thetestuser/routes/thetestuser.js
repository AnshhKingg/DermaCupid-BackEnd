module.exports = {
  routes: [
    {
      method: "GET",
      path: "/thetestuser/:FName",
      handler: "thetestuser.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/thetestuser",
      handler: "thetestuser.addAUser",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
