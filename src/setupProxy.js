const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  
  // Foodss API Proxy
  let foodsApi = process.env.REACT_APP_FOODS_API_PROTO + '://' + process.env.REACT_APP_FOODS_API_HOST + ':' + process.env.REACT_APP_FOODS_API_PORT;
  app.use(
    '/foods',
    createProxyMiddleware({
      target: foodsApi,
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};