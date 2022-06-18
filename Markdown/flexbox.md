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
      flex-direction:column-reverse;
      justify-content:space-between;
      align-items: flex-start;
    }
    .object{
    }
    .object:nth-of-type(2) {
      align-self:flex-end;
    }
    #object4 {
      align-self:center;
      flex-grow: 2;
      flex-shrink: 1;
      order:1;
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

## Syntax

```css
flex-direction-properties {
  /* row | row-reverse | column | column-reverse */
  flex-direction: column-reverse;
  /* normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] */
}

justify-content-values {
  /* Positional alignment */
  justify-content: center; /* Pack items around the center */
  justify-content: start; /* Pack items from the start */
  justify-content: end; /* Pack items from the end */
  justify-content: flex-start; /* Pack flex items from the start */
  justify-content: flex-end; /* Pack flex items from the end */
  justify-content: left; /* Pack items from the left */
  justify-content: right; /* Pack items from the right */

  /* Baseline alignment */
  /* justify-content does not take baseline values */

  /* Normal alignment */
  justify-content: normal;

  /* Distributed alignment */
  justify-content: space-between; /* Distribute items evenly The first item is flush with the start, the last is flush with the end */
  justify-content: space-around; /* Distribute items evenly Items have a half-size space on either end */
  justify-content: space-evenly; /* Distribute items evenly Items have equal space around them */
  justify-content: stretch; /* Distribute items evenly Stretch 'auto'-sized items to fit the container */

  /* Overflow alignment */
  justify-content: safe center;
  justify-content: unsafe center;
}

align-items-values {
  /* Basic keywords */
  align-items: normal;
  align-items: stretch;

  /* Positional alignment */
  /* align-items does not take left and right values */
  align-items: center; /* Pack items around the center */
  align-items: start; /* Pack items from the start */
  align-items: end; /* Pack items from the end */
  align-items: flex-start; /* Pack flex items from the start */
  align-items: flex-end; /* Pack flex items from the end */

  /* Baseline alignment */
  align-items: baseline;
  align-items: first baseline;
  align-items: last baseline; /* Overflow alignment (for positional alignment only) */
  align-items: safe center;
  align-items: unsafe center;
}

```