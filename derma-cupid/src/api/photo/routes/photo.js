module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/photos',
     handler: 'photo.getPhotosOfAUser',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/photos',
      handler: 'photo.uploadAUserPhoto',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/photo/:id',
      handler: 'photo.deleteAPhoto',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/photo/verification/:id',
      handler: 'photo.verificationOfAPhoto',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};