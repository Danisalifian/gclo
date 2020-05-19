const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use("/api", createProxyMiddleware({
        target: "https://asia-northeast1-gclo-01.cloudfunctions.net/api",
        changeOrigin: true
    }))
}