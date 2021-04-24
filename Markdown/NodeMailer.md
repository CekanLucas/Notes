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
  <a href="https://nodemailer.com"><img src="https://nodemailer.com/nm_logo_200x136.png" alt="Logo"></a>
</div>

#  Common Fields
`from` email address of sender 

`to` comma separated list or an array of recipients email addresses that will appear on the To:field

`cc` Comma separated list or an array of recipients email addresses that will appear on the Cc: field

`bcc` Comma separated list or an array of recipients email addresses that will appear on the Bcc: field

`subject` subject of email

`text` The plaintext version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘/var/data/…'})

`html` HTML version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘http://…'})

`attachements` An array of attachment objects (see Using attachments for details). Attachments can be used for embedding images as well


# Attachments

`filename` - filename to be reported as the name of the attached file. Use of unicode is allowed

`content` - String, Buffer or a Stream contents for the attachment

`path` - path to the file if you want to stream the file instead of including it (better for larger attachments)

`href` – an URL to the file (data uris are allowed as well)

`httpHeaders` - optional HTTP headers to pass on with the href request, eg. {authorization: "bearer ..."}

`contentType` - optional content type for the attachment, if not set will be derived from the filename property

`contentDisposition` - optional content disposition type for the attachment, defaults to ‘attachment’

`cid` - optional content id for using inline images in HTML message source

`encoding` - If set and content is string, then encodes the content to a Buffer using the specified encoding. Example values: ‘base64’, ‘hex’, ‘binary’ etc. Useful if you want to use binary attachments in a JSON formatted email object.

`headers` - custom headers for the attachment node. Same usage as with message headers

`raw` - is an optional special value that overrides entire contents of current mime node including mime headers. Useful if you want to prepare node contents yourself

