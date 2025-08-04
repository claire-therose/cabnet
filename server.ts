import { createServer, IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import next from 'next'

var https = require('https');
var fs = require('fs');
 
const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var options = {
    key: fs.readFileSync('./src/https/key.pem'),
    cert: fs.readFileSync('./src/https/cert.pem'),
    ca: fs.readFileSync("./src/https/root.pem"),
    // headers: {
    //   "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
    // }
};
 
app.prepare().then(() => {
  https.createServer(options, (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    // set appropriate server headers
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)
 
  console.log(
    `> Server listening at https://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})