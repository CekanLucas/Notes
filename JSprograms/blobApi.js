/* 
Binary Large OBject

The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.

Blobs can represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system. */

let arr =  ['one', 1, 'two', 2, 'three', 3, 'four', 4] ;

// var newBlob = new Blob(array, options);
let newBlob = Blob.size;

console.log(newBlob);

// A Blob has two components 