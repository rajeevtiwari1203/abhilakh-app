const PROXY_CONFIG = 
[
  {
  "context": ["/api"],
    "target": "http://www.abhilakhfoundation.org.in",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true,
    "bypass": function (req) {
    }
  }
]
module.exports = PROXY_CONFIG;

