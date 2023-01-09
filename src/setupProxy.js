const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://crm.rdstation.com/api/v1/deals?token=62c34f1b64426500206f8cdd",
      changeOrigin: true,
    })
  );
};
