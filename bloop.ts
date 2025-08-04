import { createServer, IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import next from 'next'
import { NextRequest, NextResponse } from 'next/server';

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
    //   "x-nonce": "max-age=31536000; includeSubDomains"
    // }
};
 
app.prepare().then(() => {
  https.createServer(options, (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    // set up csp headers
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    const cspHeader = `
    default-src 'self';
    style-src 'self' fonts.googleapis.com 'nonce-${nonce}';
    font-src 'self' fonts.gstatic.com;
    script-src 'self' https://cabnet.media/ 'nonce-${nonce}';
    frame-ancestors 'none';
    `
    const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, '').trim()
    

    // var reqOptions = {
    //   hostname: req.headers.host,
    //   port: 3000,
    //   path: req.url,
    //   method: req.method,
    //   headers: {
    //     // "Content-Security-Policy": contentSecurityPolicyHeaderValue,
    //     // "x-nonce": nonce
    //   }
    // }

    req.rawHeaders.push("x-nonce");
    req.rawHeaders.push(nonce);

    // console.log(reqOptions);
    // console.log(req);

    // var updatedReq = https.request(reqOptions);

    // var request = https.request(req);
    // request.setHeader('x-nonce', nonce);
    // request.setHeader('Content-Security-Policy', contentSecurityPolicyHeaderValue);

    // req.headers['x-nonce'] = nonce;
    // req.headers['Content-Security-Policy'] = contentSecurityPolicyHeaderValue;

    // set response headers
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Cross-Origin-Resource-Policy", "same-site");
    res.setHeader("referrer-Policy", "no-referrer");
    res.setHeader("x-nonce", nonce)
    res.setHeader("Content-Security-Policy", contentSecurityPolicyHeaderValue);
    
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)
 
  console.log(
    `> Server listening at https://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})