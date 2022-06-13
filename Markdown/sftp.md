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
#topImg {
  display: block;
  margin: 0 auto;
  width: 50%;
  border-radius: 20px;
}
h1, h2{
  text-align: center;
}

</style>
</head>    
<div id="stack-container">
  <a href=""><img src="" alt="Logo"></a>
</div>


#  <span class="react" title='Secure File Transfer Protocol'>SFTP</span> 

## <small class="Teal">Secure File Transfer Protocol</small>
<br>

<img id='topImg' src="https://images.prismic.io/digitalocean/0b619d51-a723-4748-997f-39ed5697a540_intro-to-cloud.jpg?auto=compress,format" alt="SFTP tutorial">


[Article - Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-use-sftp-to-securely-transfer-files-with-a-remote-server)

<b><i class="HotPink"><span class="text-red-500" title="File Transfer Protocol">FTP</span> is the deprecated non secure version</i></b>

<div class="text-2xl leading-none border-yellow-500 bg-gray-900 border-dotted p-5">
<p class="text-green-500 font-bold">Connect to Sftp</p>
<p class="text-blue-500 font-mono text-sm">sftp user_name@your_server_ip_or_remote_hostname

</p>

</div>

```
-oPort=custom_port # option to set custom port if default 22 is not used 
ip addr show # to find relevant ip address
```