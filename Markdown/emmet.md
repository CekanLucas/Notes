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
  color: #94c02f;
}
code, ul, strong, em {
  filter: hue-rotate(260deg)
}
</style>
</head>    
<div id="stack-container">
  <a href="https://docs.emmet.io/cheat-sheet/"><img src="https://emmet.io/-/4076541266/i/logo.svg" alt="Logo"></a>
</div>

# Emmet

## Decrement / Increment

<span class="text-xl">ctrl + (**magnitude**) + ( `[` = *decrement* `]` = *increment* )</span>

`shift` = 1
`alt` = 0.1
`shift + alt` = 10

- Increment Number by **1**: `ctrl+shift+]`
- Decrement Number by **1**: `ctrl+shift+[`
- Increment Number by **0.1**: `ctrl+alt+]`
- Decrement Number by **0.1**: `ctrl+alt+[`
- Increment Number by **10**: `ctrl+shift+alt+]`
- Decrement Number by **10**: `ctrl+shift+alt+[`

## Tag modifying

<span class="text-xl">ctrl + shift + A (**action**)</span>

##### Wrap with Abbreviation `ctrl+shift+A A`
##### Show Emmet Commands `ctrl+shift+A C`

Other tag actions
- Remove Tag `ctrl+shift+A D`
- Split/Join Tag `ctrl+shift+A J`
- Update Tag `ctrl+shift+A M`