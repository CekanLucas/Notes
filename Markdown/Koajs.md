<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
#stack-container {
    position: fixed;
    height: 5em;
    display: flex;
    flex-direction: column-reverse;
    bottom:5vh;
    right: 5vw;
    width: 20vw
}
</style>
</head>    

<div id="stack-container">

<a href="https://make.wordpress.org/"><img src="https://www.thinktanker.io/wp-content/uploads/2019/12/Koa-nodejs-logo-300x300.png" alt="Node JS Logo"></a>
</div>

# KoaJs <small class="Yellow">NodeJS Framework</small>

`app.listen(...)` is basically 
```js
import http from 'http';
import Koa from 'koa';

const app = new Koa();

http.createServer(app.callback()).listen(3000);

//look running both HTTP & HTTPS
import http from 'http';
import https from 'https';
import Koa from 'http';
const app = new Koa();
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
```
## `app.callback()`
Could be used to mount a Koa app in Connect/Express app
this is a callback function for <b class="Khaki">http.create</b>

## `app.keys()`
set signed cookie keys using <a href="https://github.com/jed/keygrip">Keygrip</a>

```js
app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
```
These keys may be rotated and are used when signing cookies with option
`{ signed: true }`
```js
ctx.cookies.set('name', 'tobi', { signed: true });
```

## Response aliases 

    ctx.body
    ctx.body=
    ctx.status
    ctx.status=
    ctx.message
    ctx.message=
    ctx.length=
    ctx.length
    ctx.type=
    ctx.type
    ctx.headerSent
    ctx.redirect()
    ctx.attachment()
    ctx.set()
    ctx.append()
    ctx.remove()
    ctx.lastModified=
    ctx.etag=

## Request aliases 


    ctx.header
    ctx.headers
    ctx.method
    ctx.method=
    ctx.url
    ctx.url=
    ctx.originalUrl
    ctx.origin
Get full request Url include protocol, host and url

    ctx.href // => http://example.com/foo/bar?q=1

    ctx.path
    ctx.path=
    ctx.query
    ctx.query=
    ctx.querystring
    ctx.querystring=
    ctx.host
    ctx.hostname
    ctx.fresh
    ctx.stale
    ctx.socket
    ctx.protocol
    ctx.secure
    ctx.ip
    ctx.ips
    ctx.subdomains
    ctx.is()
    ctx.accepts()
    ctx.acceptsEncodings()
    ctx.acceptsCharsets()
    ctx.acceptsLanguages()
    ctx.get()


