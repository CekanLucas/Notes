<head>
 <link rel="stylesheet" href="rsync.css">
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
  <a href="https://en.wikipedia.org/wiki/Rsync"><img src="https://upload.wikimedia.org/wikipedia/en/1/11/Newrsynclogo.png" alt="Rsync Logo from Wikipedia"></a>
</div>

#  <span class="react">RSync</span> 

<p class="Teal text-3xl">A fast, versatile, remote (and local) file-copying tool</p>

<p class="Lime text-center text-2xl">Rsync  is  a  fast and extraordinarily versatile file copying tool</p>

<p class="list-heading">It copies to / from </p>

- locally over any remote shell
- remote rsync daemon


It offers a large number of options that control every aspect of its behavior and permit very flexible specification of the set of files to be copied.  

It is famous for its <span class="text-green-300 font-semibold">delta-transfer algorithm</span>, which reduces the amount of data sent over the network  by  sending only the <u class="text-red-300">differences</u> between the source files and the existing files in the destination.  Rsync is widely used for backups and mirroring and as an improved copy command for everyday use

Rsync  finds  files  that need to be transferred using a <span class="text-yellow-300">quick check algorithm <sup>by default</sup></span> that looks for files that have changed in size or in last-modified time.  Any changes in the other preserved attributes (as
requested by options) are made on the destination file directly when the quick check indicates that the file’s data does not need to be updated

<p class="list-heading">Additional Features ...</p>

- support for copying links, devices, owners, groups, and permissions
- exclude and exclude-from options similar to GNU tar
- a CVS exclude mode for ignoring the same files that CVS would ignore
- can use any transparent remote shell, including ssh or rsh
- does not require super-user privileges
- pipelining of file transfers to minimize latency costs
- support for anonymous or authenticated rsync daemons (ideal for mirroring)

