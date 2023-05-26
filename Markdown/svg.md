<head>
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
  <link rel="stylesheet" href="../CSS.css">
  <script src="../CSS.js"></script>
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
/* Themes */
h1, h2, h3, h4, h5, h6 {
  color: goldenrod;
}

</style>
</head>    
<div id="stack-container">
  <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction"><img src="" alt="Logo"></a>
</div>

# SVG - Scalable Vector Graphics

> SVG is a XML language it can be used to create an image either by specifying all the lines and shapes necessary, by modifying already existing raster images, or by a combination of both. The image and its components can also be transformed, composited together, or filtered to change their appearance completely

<style>
  #svg {
    width: 300px; /* works */
    float: left;
    margin-right: 2em;
  }
  img {
    float: right;
    filter: invert();
  }
  #svg-path {
    float: left;
    margin-right: 1em;
    /* outline: 1px white solid; */
  }
</style>

<svg width="300" height="200" id="svg"> 
  <rect width="100%" height="100%" fill="firebrick"/>
  <circle cx="150" cy="100" r="80" fill="aliceblue"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>
</svg>

## Grid

Just like with *canvas* the upper-left corder is considered the origin (0,0) <img src="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Positions/canvas_default_grid.png" alt="the grid system">

## Basic Shapes 

<svg width="200" height="250">
  <rect x="10" y="10" width="30" height="30" stroke="white" fill="transparent" stroke-width="2" />
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="white" fill="transparent" stroke-width="5"/>
  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>
  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145" stroke="orange" fill="transparent" stroke-width="5"/>
  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" stroke="green" fill="transparent" stroke-width="5"/>
  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>

## Path
<svg width="100" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
  <path d="M10 10" /> <!-- Move to point (10, 10) -->
  <path d="M 10 10 H 90 V 90 H 10 Z" stroke="white"/>
  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>
</svg>

`M` move to command *M dx dy*
`L` line to command *L dx dy*
`H` move horizontal *H dx*
`V` move vertical *V dy*
`Z` close path *Z*

### Relative Command

<svg width="100" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
   <path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="white"/>
  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>
</svg>

The above uppercase commands are based on *absolute* position but lowecase version are based relative to where they are

## Curve Commands 

### Bézier Curves

<svg width="100" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
   <path d="M 10 10 C 10 10, 0 90, 90 90" fill="transparent" stroke="white"/>
  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>
</svg>

The cubic bezier requires three points to be specified
1. Where line starts
2. Control point
3. Where line ends

    C x1 y1, x2 y2, x y

### Arcs

    A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy

<svg width="200" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
  <circle cx="50" cy="50" r="2" fill="red"/>
  <circle cx="50" cy="50" r="50" fill="transparent" stroke="red" />
  <circle cx="150" cy="50" r="2" fill="red"/>
  <circle cx="150" cy="50" r="50" fill="transparent" stroke="red"/>
</svg>

<!-- Move the center of the two circles 10 % closer or + 20px -->
<svg width="200" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
  <circle cx="70" cy="50" r="2" fill="red"/>
  <circle cx="70" cy="50" r="50" fill="transparent" stroke="red" />
  <circle cx="130" cy="50" r="2" fill="red"/>
  <circle cx="130" cy="50" r="50" fill="transparent" stroke="red"/>
</svg>

<svg width="200" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
  <circle cx="70" cy="50" r="2" fill="red"/>
  <circle cx="70" cy="50" r="50" fill="transparent" stroke="grey" />
  <circle cx="130" cy="50" r="2" fill="red"/>
  <circle cx="130" cy="50" r="50" fill="transparent" stroke="grey"/>
  <circle cx="130" cy="0" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="130" cy="100" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="70" cy="0" r="2" fill="yellow"/>
  <circle cx="70" cy="100" r="2" fill="yellow"/>
  <circle cx="20" cy="50" r="2" fill="yellow"/>
  <circle cx="20" cy="0" r="2" fill="purple"/>
  <circle cx="20" cy="100" r="2" fill="purple"/>
  <circle cx="180" cy="50" r="2" fill="yellow"/>
  <circle cx="180" cy="0" r="2" fill="purple"/>
  <circle cx="180" cy="100" r="2" fill="purple"/>
  <circle cx="100" cy="86.602" r="2" fill="yellow"/>
  <circle cx="100" cy="13.398" r="2" fill="yellow"/>
</svg>

<svg width="200" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
  <circle cx="70" cy="50" r="2" fill="red"/>
  <circle cx="70" cy="50" r="50" fill="transparent" stroke="grey" />
  <circle cx="130" cy="50" r="2" fill="red"/>
  <circle cx="130" cy="50" r="50" fill="transparent" stroke="grey"/>
  <circle cx="130" cy="0" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="130" cy="100" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="70" cy="0" r="2" fill="yellow"/>
  <circle cx="70" cy="100" r="2" fill="yellow"/>
  <circle cx="20" cy="50" r="2" fill="yellow"/>
  <circle cx="20" cy="0" r="2" fill="purple"/>
  <circle cx="20" cy="100" r="2" fill="purple"/>
  <circle cx="180" cy="50" r="2" fill="yellow"/>
  <circle cx="180" cy="0" r="2" fill="purple"/>
  <circle cx="180" cy="100" r="2" fill="purple"/>
  <circle cx="100" cy="86.602" r="2" fill="yellow"/>
  <circle cx="100" cy="13.398" r="2" fill="yellow"/>
  <path d="M 20 50 
  C 20 50, 20 0, 70 0 
  C 70 0, 100 0, 100 13.398 
  C 100 13.398, 100 0, 130 0 
  C 130 0, 180 0, 180 50 
  C 180 50, 180 100, 130 100 
  C 130 100, 100 100, 100 86.602 
  C 100 86.602, 100 100, 70 100 
  C 70 100, 30 100, 20 50" 
  stroke="red" stroke-width="1" fill="transparent" />
</svg>

<svg width="200" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
  <circle cx="70" cy="50" r="2" fill="cyan"/>
  <circle cx="70" cy="50" r="50" fill="transparent" stroke="grey" />
  <ellipse cx="70" cy="50" rx="50" ry="50" stroke="orange" fill="transparent"/>
  <circle cx="130" cy="50" r="2" fill="cyan"/>
  <circle cx="130" cy="50" r="50" fill="transparent" stroke="grey"/>
  <circle cx="130" cy="0" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="130" cy="100" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="70" cy="0" r="2" fill="yellow"/>
  <circle cx="70" cy="100" r="2" fill="yellow"/>
  <circle cx="20" cy="50" r="2" fill="yellow"/>
  <circle cx="20" cy="0" r="2" fill="purple"/>
  <circle cx="20" cy="100" r="2" fill="purple"/>
  <circle cx="180" cy="50" r="2" fill="yellow"/>
  <circle cx="180" cy="0" r="2" fill="purple"/>
  <circle cx="180" cy="100" r="2" fill="purple"/>
  <path d="M 70 100 
  A 50 50, 0, 0, 1, 70 0
  A 50 50, 0, 0, 1, 100 10
  A 50 50, 0, 0, 1, 130 0
  A 50 50, 0, 0, 1, 130 100
  A 50 50, 0, 0, 1, 100 90
  A 50 50, 0, 0, 1, 70 100" 
  stroke="red" stroke-width="1" fill="transparent" />
</svg>

## `viewBox` setting up for scaling

[Helpful Article by CSS Tricks](https://css-tricks.com/scale-svg/)

<svg width="200" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
  <circle cx="70" cy="50" r="2" fill="cyan"/>
  <circle cx="70" cy="50" r="50" fill="transparent" stroke="grey" />
  <ellipse cx="70" cy="50" rx="50" ry="50" stroke="orange" fill="transparent"/>
  <circle cx="130" cy="50" r="2" fill="cyan"/>
  <circle cx="130" cy="50" r="50" fill="transparent" stroke="grey"/>
  <circle cx="130" cy="0" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="130" cy="100" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="70" cy="0" r="2" fill="yellow"/>
  <circle cx="70" cy="100" r="2" fill="yellow"/>
  <circle cx="20" cy="50" r="2" fill="yellow"/>
  <circle cx="180" cy="50" r="2" fill="yellow"/>
  <path d="M 100 90 
  A 50 50, 0, 0, 0, 100 10
  A 50 50, 0, 0, 0, 100 90"
  stroke="red" stroke-width="1" fill="transparent" />
</svg>

<svg width="200" height="100" id="svg-path">
  <rect width="100%" height="100%"/>
  <circle cx="70" cy="50" r="2" fill="cyan"/>
  <circle cx="70" cy="50" r="50" fill="transparent" stroke="grey" />
  <ellipse cx="70" cy="50" rx="50" ry="50" stroke="orange" fill="transparent"/>
  <circle cx="130" cy="50" r="2" fill="cyan"/>
  <circle cx="130" cy="50" r="50" fill="transparent" stroke="grey"/>
  <circle cx="130" cy="0" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="130" cy="100" r="2" fill="transparent" stroke="yellow"/>
  <circle cx="70" cy="0" r="2" fill="yellow"/>
  <circle cx="70" cy="100" r="2" fill="yellow"/>
  <circle cx="20" cy="50" r="2" fill="yellow"/>
  <circle cx="180" cy="50" r="2" fill="yellow"/>
  <path d="M 100 90 
  A 50 50, 0, 0, 1, 20 50
  A 50 50, 0, 0, 1, 100 10
  A 50 50, 0, 0, 0, 100 90
  "
  stroke="red" stroke-width="1" fill="transparent" />
</svg>