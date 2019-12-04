const proxy = require("http-proxy-middleware");

module.exports = app =>
  app.use(
    proxy(["/card", "/auth", "/VodafoneIEExternalWeb", "/stripe"], {
      target: "http://localhost:5000"
    })
  );
