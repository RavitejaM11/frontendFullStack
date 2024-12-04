const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('https-proxy-middleware');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Proxy setup for Weatherstack API
app.use('/weather', createProxyMiddleware({
  target: 'https://api.weatherstack.com', // Target Weatherstack API
  changeOrigin: true,
  pathRewrite: {
    '^/weather': '/current', // Remove '/weather' prefix
  },
  onProxyReq: (proxyReq, req, res) => {
    // You can add headers if needed (e.g., authentication)
    proxyReq.setHeader('access_key', '350fd842c298ba32f175f744f5ab7fa0'); 
  },
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
