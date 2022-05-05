module.exports = ({ env }) => {
  let theURL = "https://dcadmin.dermacupid.com";
  // let theURL = "localhost:1337"

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
    // url: theURL,
    proxy: false,
    secure: true,
    httpOnly: false,
  };
};
