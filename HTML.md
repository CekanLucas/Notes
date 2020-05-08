<head>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./color.css"/>
  <link 
      rel="stylesheet" 
      type="text/css" 
      media="all" 
      href="./CSS.css"/>
  <link 
      href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
      rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
<style> 



</style>
</head>    


# Positioning Tips
When you use float elements (my favorite) they don't expand the div parent container. Enter the clearfix hack observe;

```css
.clearfix:after {
  content: "";
  clear:both;
}
```


<div class=container>

<div id=no-clearfix>
<h3>No clearfix</h3>


</div>
<div class="asideL"></div>
<div class="asideR"></div>
</div>
<button class="button is-primary">Toggle ClearFix</button>