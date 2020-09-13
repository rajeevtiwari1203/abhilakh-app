const PROXY_CONFIG = 
[
  {
  "context": ["/api"],
    // "target": "http://www.abhilakhfoundation.org.in",
    "target": "http://localhost:3000",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "bypass": function (req) {
    }
  }
]
module.exports = PROXY_CONFIG;

