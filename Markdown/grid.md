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
      grid-row-start: -3;
      grid-column-start: 2;
    }
    #object11 {
      grid-column-end: 4;
      grid-row-end: 2;
    }
    #object5 {
      grid-row-start: 3;
      grid-row-end: 5;
      grid-column-start: 2;
      grid-column-end: 4;
    }
    #object10 {
        grid-row-start: span 2;
        grid-column-start: span 2;
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

#### Other Measurement
`auto` is just the size of the content
`min-content` size based on the *smallest* content
`max-content` size based on the *largest* content

##### Auto Fill & Auto Fit
for the `repeat([number] ...[sizes])` syntax you can use the <code class="filter hue-rotate-30">auto-fill</code> so that it fills up with how many grid elements of size it can whilst <code class="filter -hue-rotate-60">aut0-fit</code> callapses empty tracks into 0


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

### Grid Order and Size

Think in terms of order along a line

```css
#changed-order {
  grid-row-start: -3; /* Set grid item relative order  */
  grid-column-start: 2; /* Set grid item relative order  */
}

#resized {
  grid-row-start: 0;
  grid-row-end: 5;
  grid-column-start: 0;
  grid-column-end: 4;
}

#resized.same-as-above{
  grid-row-start: span 2;
  grid-column-start: span 2;
}

#resized.shortend{
  grid-row: 0 / 5;
  grid-column: 0 / 4;
}
```

### Defining Line Names 
We can define grid lines with the `[grid line name]` syntax

```css 
grid {
  display: grid;
  /* Default grid line naming */
  grid-template-rows: [1] 1fr [2] 1fr [3];
  /* Could name multiple lines the same name */
  grid-template-columns: [start] 1fr repeat(3, [special] 1fr);
} 

object-resized: {
  grid-column: start / special2
}
```

### Grid Area 
 
**Grid Area** is the <span >shorthand</span> of 

`grid-row-start` `grid-column-start`

`grid-row-end` `grid-column-end`

<u>in that order</u> and seperated by a <code class="filter -hue-rotate-90">/</code>


#### example
``` css
grid-area{ 
  grid-area: auto / 2 / left / bottom;
  grid-area: span 2 / span 5 / auto / auto;
}
```

## Span Shorthand
You can use shorthand with custom line name by using `-start` and `-end` suffix

```css
container{
  grid-template-rows: 1fr [botttom-start] 1fr 1fr [bottom-end];
}
grid-object{
  grid-row: bottom;
}
```

## Grid-Area

```css
container {
    grid-template-areas: ". ...... ." 
                         ". center ." 
                         ". center .";
}
object {
  grid-area: center;
}