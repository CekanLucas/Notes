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

</style>
</head>    
<div id="stack-container">
  <a href="https://nodejs.org/api/stream.html#stream_class_stream_readable"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="Link to Node JS doc on Stream"></a>
</div>

#  Node JS Streams 

Readable 
- <a href="#event-data">data</a>
- close
- end
- error
- .pipe(destination)
- .setEncoding()

Writeable 
- drain 
- pipe
- error 
- write()
- end()

## `chunk` <b class="Lime"> \<Buffer> | \<string> | \<any> </b> 

The chunk of data, for strings _not_ operating in object mode chunk is either string or buffer 

If operating in object mode chunk can be any otherJS value other than `null`

## Event `Data`
<div id="event-data"> </div>

``` js  
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
```


<span class="DeepPink"> This event is emitted whenever the stream is relinquishing ownership of a `chunk` of data to a consumer. 

<span class="HotPink"> This may occur whenever the stream is switched in flowing mode by calling `readable.pipe()`, `readable.resume()`, or by attaching a listener callback to the 'data' event. 

<span class="HotPink">This event will also be emitted whenever the `readable.read()` method is called and a chunk of data is available to be returned.

## Event `end`
<div id="event-data"> </div>

``` js  
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
readable.on('end', () => {
  console.log('There will be no more data.');
});
```

<span class="DeepPink"> This event is emitted whenever there is no more data to be consumed from the stream

<span class="HotPink"> This may be accomplished by switching the stream flowing mode or by calling the `stream.read()` repeatable until all the data has been consumed 

## Event `error`
<div id="event-data"> </div>

<span class="DeepPink"> May be emmitted at any time Typically, this may occur if the underlying stream is unable to generate data due to an underlying internal failure, or when a stream implementation attempts to push an invalid chunk of data

<span class="HotPink"> The listener callback will be passed a single `Error` object

## Event `pause`
<div id="event-data"> </div>

<span class="DeepPink"> This event is emitted whenever `stream.pause()` is called and `readableFlowing` is not `false`

## Event `readable`
<div id="event-data"> </div>

``` js  
const readable = getReadableStreamSomehow();
readable.on('readable', () => {
  let data;  // there is some data to read now 

  while (data = this.read()) {
    console.log(data);
  }
});
```
<span class="DeepPink"> This event is emitted whenever there is data available to be read from the stream
This will also be triggered once the end of the stream data has been reached but before the `end` event is emmited

<span class="HotPink"> In some cases, attaching a listener for the this event will cause some amount of data to be read into an internal buffer
