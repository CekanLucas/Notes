<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="sliding_coins.css">
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
<div id="stack-container">
  <a href=""><img src="" alt="Logo"></a>
</div>

# Sliding Coins

[MDN - Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

Drag and Drop Puzzles from [Brilliant](https://brilliant.org/courses/joy-problem-solving/coin-rearrangements-3/mastering-jumps-3/1/)


<style>
  #coin-case {
    width: 20vw;
    margin: 2em auto;
  }
  .coin-container {
  background-color: #e9751080;
  border: 5px double grey;
  display:flex;
  flex-direction:row;
  justify-content:stretch;
  align-items: flex-start;
  align-items: stretch;
  height: fit-content;
  margin: 2em 0;
}
.coin-slot {
  display: inline;
  width: 100%;
  border: 3px solid black;
  box-sizing: border-box;
  padding: 1em;
}
.coin {
  width: 100%;
  background-color: white;
  border-radius: 50%;
  aspect-ratio : 1 / 1;
}
.coin-left {
 background-color: silver;
}
.coin-right {
 background-color: gold;
}
</style>

<div class="coin-container" id="coin-case">
  <div class="coin-slot">
    <div class="coin coin-left" id="base-coin-left" draggable="true"></div>
  </div>
  <div class="coin-slot">
    <div class="coin coin-right" id="base-coin-right" draggable="true"></div>
  </div>
</div>

<div class="coin-container">
  <div class="coin-slot">
    <div class="coin coin-left"></div>
  </div>
  <div class="coin-slot">
    <div class="coin coin-left"></div>
  </div>
  <div class="coin-slot"></div>
  <div class="coin-slot"></div>
  <div class="coin-slot">
    <div class="coin coin-right"></div>
  </div>
  <div class="coin-slot">
    <div class="coin coin-right"></div>
  </div>
    <div class="coin-slot">
    <div class="coin coin-right"></div>
  </div>
    <div class="coin-slot">
    <div class="coin coin-right" id="coin_1" draggable="true"></div>
  </div>
</div>

<form action="" class="field">
  <label class="label" for="length">Length <input class="input is-success" type="number" name="length" id="input-length"></label>
</form>

<script>
   document.getElementById('base-coin-left').addEventListener('dragstart', dragStart_handler)
   document.getElementById('base-coin-right').addEventListener('dragstart', dragStart_handler)

  function dragStart_handler(e){
    console.log("dragstart fired:\t", e)
    const coin_type = (e.path[0]).id === 'base-coin-left' ? 'left' : 'right'
    create_new_coin(coin_type);
  }

  function create_new_coin(coin_type) {
    console.log('new coin created of type ', coin_type)
    const baseCoin = document.getElementById('base-coin-' + coin_type) 
    const newCoin = baseCoin.cloneNode()
    
    let i = 1;
    while(i !== null) {
     if(document.getElementById(`coin_${i}`)) i++
     else {
       newCoin.id = `coin_${i}`;
       i = null;
     }
     console.log(newCoin)
    }
  }
</script>

