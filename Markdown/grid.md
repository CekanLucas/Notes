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
    href="grid.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

  <style>
    /* Play with grid here */
    #container{
      display:grid;
      grid-template-rows: repeat(2, 3em 100px);
      grid-template-columns: 100px 1fr 2fr;
      grid-row-gap: 10px;
      grid-column-gap: 10px;
      grid-gap: 1em
    }
    .object{
    }
    .object:nth-of-type(2) {
    }
    #object4 {
    }
  </style>
</head>    

# Grid

[Excellent way to learn -> grid critters](https://mastery.games/gridcritters/)

<div id="container">
  <div class="object" id="object1">1</div>
  <div class="object" id="object2">2</div>
  <div class="object" id="object3">3</div>
  <div class="object" id="object4">4</div>
  <div class="object" id="object5">5</div>
  <div class="object" id="object6">6</div>
  <div class="object" id="object7">7</div>
  <div class="object" id="object8">8</div>
  <div class="object" id="object9">9</div>
  <div class="object" id="object10">10</div>
  <div class="object" id="object11">11</div>
  <div class="object" id="object12">12</div>
</div>

## Syntax

```css
example-properties {
  grid-template-rows: 10% 20vh 300px; /* space between rows */
  grid-template-columns: 100px 200px 100px; /* space between columns */
  grid-template-columns: 1fr 2fr 1fr;
  /* repeat(4, 100px, 1fr); */
}

grid-gaps {
  grid-[ columns | rows ]-space: 100px;
  grid-gap: 100px; /* combine above */
  grid-gap: [grid-rows-gap] [grid-columns-gap];
}

```
### Grid gaps

- `fr` units take the **fraction of free space** whilst `%` will take that amount of space no matter what

- there are no `fr` units for gaps