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

# EFI <small>bootloaders</small>
from Rod Smith <a href="http://www.rodsbooks.com/efi-bootloaders/index.html">click here</a> 

<big>**E**xtensible **F**irmware **I**nterface</big> 
<small class="Orange">Note: the 2.x variant is the Unified EFI (UEFI)</small>

The older way of booting was with the <big class="Teal">**B**asic **I**nput/**O**utput **S**ystem (BIOS) boot</big>

### <a href="http://www.rodsbooks.com/efi-bootloaders/secureboot.html">Dealing with Secure Boot </a>