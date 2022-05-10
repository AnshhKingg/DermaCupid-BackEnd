module.exports = ({ env }) => {
  // let theURL = "https://dcadmin.dermacupid.com";
  // let theURL = "localhost:1337"
  let theURL = "http://ec2-3-110-44-128.ap-south-1.compute.amazonaws.com"

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
