// pipe() : source and and pipes it into destination 
// eg src.pipe(des1).pipe(dest2)
const Stream = require('stream')
const readableStream = new Stream.Readable()

readableStream._read = () => {}

// Could also do this method
const readableStream2 = new Stream.Readable({
  read() {}
})

readableStream.push('hi!')
readableStream.push('hio!')
readableStream2.push('ho!')

console.log(readableStream, readableStream2)

// for writable object use _write 
writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

process.stdin.pipe(writableStream)