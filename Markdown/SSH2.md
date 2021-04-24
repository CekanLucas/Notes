<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
body ::selection {
  /*highlighting*/
  background: transparent;
  text-shadow: 
    1px  0px 1px ,
    0px  1px 1px ,
    -1px  0px 1px ,
    0px -1px 1px ,
    0px  1px black ,
    1px  0px black ,
    -1px  0px black ,
    0px -1px black ;
  text-outline: black;  
}
big {
  color: violet;
  font-weight: bold;
}
</style>
</head>    
<div id="stack-container">
  <a href=""><img src="" alt="Logo"></a>
</div>

#  SFTP

## Stream Powered Node API

- `process.stdin` returns a stream connected to stdin
- `process.stdout` returns a stream connected to stdout
- `process.stderr` returns a stream connected to stderr
- `fs.createReadStream()` creates a readable stream to a file
- `fs.createWriteStream()` creates a writable stream to a file
- `net.connect()` initiates a stream-based connection
- `http.request()` returns an instance of the http.ClientRequest class, which is a writable stream
- `zlib.createGzip()` compress data using gzip (a compression algorithm) into a stream
- `zlib.createGunzip()` decompress a gzip stream.
- `zlib.createDeflate()` compress data using deflate (a compression algorithm) into a stream
- `zlib.createInflate()` decompress a deflate stream
### Four Types of Stream 

  <big class="LightBlue">Readable</big> a stream you can pipe from, but not pipe into (you can receive data, but not send data to it). When you push data into a readable stream, it is buffered, until a consumer starts to read the data.

  <big class="LightBlue">Writable</big> a stream you can pipe into, but not pipe from (you can send data, but not receive from it)

  <big class="LightBlue">Duplex</big> a stream you can both pipe into and pipe from, basically a combination of a Readable and Writable stream

  <big class="LightBlue">Transform</big> a Transform stream is similar to a Duplex, but the output is a transform of its input



## Client Only Methods on SFTP 

 <big style="text-align:center; color:blueviolet">using parallel reads for faster throughput</big>
<big>fastGet</big> Download file from at `remotePath` to `localpath`
<big>fastPut</big> Uploads file from at `localPath` to `remotepath`

<big>createReadStream</big>
<big>createWriteStream</big>