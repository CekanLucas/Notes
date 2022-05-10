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



``` bash
-oPort=custom_port # option to set custom port if default 22 is not used 
ip addr show # to find relevant ip address
```

    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
          valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host 
          valid_lft forever preferred_lft forever
    2: enp0s31f6: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
        link/ether 24:4b:fe:95:b7:e0 brd ff:ff:ff:ff:ff:ff
    3: wlo1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
        link/ether a8:7e:ea:eb:39:21 brd ff:ff:ff:ff:ff:ff
        inet 192.168.0.2/24 brd 192.168.0.255 scope global dynamic noprefixroute wlo1
IP to connect with <b class="HotPink">192.168.0.2</b>

          valid_lft 603690sec preferred_lft 603690sec
        inet6 2001:1970:5c99:5200::ab12/128 scope global dynamic noprefixroute 
          valid_lft 42097sec preferred_lft 42097sec
        inet6 2001:1970:5c99:5200:689c:49f3:2974:8ac8/64 scope global temporary dynamic 
          valid_lft 43180sec preferred_lft 43180sec
        inet6 2001:1970:5c99:5200:a5f9:7fd7:ae19:bc4a/64 scope global dynamic mngtmpaddr noprefixroute 
          valid_lft 43180sec preferred_lft 43180sec
        inet6 fe80::a078:5e03:5326:6cf9/64 scope link noprefixroute 
          valid_lft forever preferred_lft forever
    4: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
        link/ether 02:42:62:23:34:a6 brd ff:ff:ff:ff:ff:ff
        inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
          valid_lft forever preferred_lft forever

