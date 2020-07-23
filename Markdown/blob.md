<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/CSS.css"/>
    <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
</style>
</head>    


# Binary Large OBject

<b class="LightBlue">The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.</b>

> Blob are a subset of the file type

Blobs can represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.

```js
let arr =  ['one', 1, 'two', 2, 'three', 3, 'four', 4] ;

// var newBlob = new Blob(array, options);
let newBlob = Blob.size;
let blob = new Blob( 
    ["<html>...</html>"], 
    {type:'text/html'}
)
```
Made of two parts

<b class="Gray">blob = <span class="Tomato">parts</span> + <span class="Orange">type</span></b>

The main advantage of Blobs is that they can be used as files particulary temporary files on the web

