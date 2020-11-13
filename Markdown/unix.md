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

# Unix <small class="Grey">Programming Environment</small>

`cntrl + d` to log out <span class="LightBlue">This bassically tells the terminal that there is no more input</span>

### Printing Commands 

`cat` comes from <i class="FireBrick">concatention</i> and simply prints the contents of files in argumnets 

`pr` is like any other print command but it is designed to print with a page friendly format <b class="Yellow">every page is 66 lines or 11 inches </b> `pr -3 ` to print with 3 columns
