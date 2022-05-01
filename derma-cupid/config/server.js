module.exports = ({ env }) => {
  let theURL = "http://test.contriversedge.com"

  return {
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: theURL,
  proxy: false,
  secure: false,
  httpOnly: false,}
};
