const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/*", { target: "http://localhost:8000" }));
  app.use(proxy("/api/allsoups/*", { target: "http://localhost:8000" }));
  app.use(proxy("/api/date/change", { target: "http://localhost:8000" }));
};
