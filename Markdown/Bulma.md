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
h1, h2, h3, h4, h5, h6 {
  text-align: center;
  text-shadow: none;
  font-weight: bolder;
  color: Turquoise;
}
</style>
</head>    
<div id="stack-container">
  <a href="https://bulma.io/documentation"><img src="https://seeklogo.com/images/B/bulma-logo-45B5145BF4-seeklogo.com.png" alt="Bulma.io Logo"></a>
</div>

### <sub class="hotpink panel">cheatsheet</sub>
#  <span class="react">Bulma</span>

<div class="paginations buttons is-centered">
  <div class="button is-primary">is-primary</div>
  <div class="button is-link">is-link</div>
  <div class="button is-info">is-info</div>
  <div class="button is-success">is-success</div>
  <div class="button is-warning">is-warning</div>
  <div class="button is-danger">is-danger</div>
</div>


<div class="pagination">
  <div class="button is-primary is-small">is-small</div>
  <div class="button is-primary is-medium">is-medium</div>
  <div class="button is-primary is-large">is-large</div>
</div>

<div class="buttons is-centered">
  <button class="button is-white">White</button>
  <button class="button is-light">Light</button>
  <button class="button is-dark">Dark</button>
  <button class="button is-black">Black</button>
  <button class="button is-text">Text</button>
  <button class="button is-ghost">Ghost</button>
</div>

### other modifers
- is-rounded
- is-outlined 
- is-inverted
- is-fullwidth
- is-loading

    :hover and is-hovered
    :focus and is-focused
    :active and is-active
