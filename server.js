var http = require('http')
var httpProxy = require('http-proxy')

httpProxy.createProxyServer({ target: 'http://localhost:9000' }).listen(8000) // See (†)
http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write(
      'request successfully proxied!' +
        '\n' +
        JSON.stringify(req.headers, true, 2)
    )
    res.end()
  })
  .listen(9000)
