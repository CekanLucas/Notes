<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/color"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="../boilerplate/CSS.css"/>
  <link 
    rel="stylesheet" 
    type="text/css" 
    media="all" 
    href="flexbox.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

  <style>
    /* Play with flexbox here */
    #container{
      display:flex;
      flex-direction:row-reverse;
    }
    .object{
      background: radial-gradient(circle, yellow 0%, orangered 80%);
    }
  </style>
</head>    

# FlexBox

<div id="container">
  <div class="object" id="object1">1</div>
  <div class="object" id="object2">2</div>
  <div class="object" id="object3">3</div>
  <div class="object" id="object4">4</div>
  <div class="object" id="object5">5</div>
</div>