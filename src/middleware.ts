import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  // // since don't have sign in function yet, just redirect from home to about
  // if (request.nextUrl.host == "localhost:3000") {
  //   // dev
  //   if (request.nextUrl.pathname == "/") {
  //     return NextResponse.redirect("https://localhost:3000/about");
  //   }
  // }
  // if (request.nextUrl.pathname == "https://cabnet.media" || request.nextUrl.pathname == "https://localhost:3000") {
  //   return NextResponse.redirect("https://localhost:3000/about");
  // }

  // for once we have https set up

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()
 
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
 
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
 
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )

  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000'
  )
 
  return response
}