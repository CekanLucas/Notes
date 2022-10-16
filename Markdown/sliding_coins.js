
   document.getElementById('base-coin-left').addEventListener('dragstart', dragStart_handler)
   document.getElementById('base-coin-right').addEventListener('dragstart', dragStart_handler)

  function dragStart_handler(e){
    const coin_type = (e.path[0]).id === 'base-coin-left' ? 'left' : 'right'
    const newCoin = create_new_coin(coin_type);

    // newCoin html in datatransfer object
    const dt = e.dataTransfer
    // dt.setData("text/html", newCoin.innerHTML)
    dt.setData('coin', newCoin)
    dt.effectAllowed = 'move'
    console.log("dragstart fired:\t", e)

    const data = dt.getData('coin')
    console.log(data.id);
  }



  // define coin-slots should be able to handle dragged items being dropped there
  const coinSlots = document.querySelectorAll('.active-slot')
  coinSlots.forEach(
    (slot, i) => {
      console.log('Slot element', slot, i)
      const el = document.getElementById(slot.id)
      el.addEventListener('dragenter', dragEnter_handler)
      el.addEventListener('dragleave', dragLeave_handler)
      
      // el.addEventListener('dragover', dragOver_handler)
    }
  )

  function dragEnter_handler(e) {
    e.dataTransfer.dropEffect = 'move';
    e.preventDefault()
    console.log("dragenter fired:\t", e)
  } 
  function dragOver_handler(e) {
    e.dataTransfer.dropEffect = 'move';
    e.preventDefault()
    console.log("dragover fired:\t", e)
  } 


// DOM METHODS

function create_new_coin(coin_type) {
  // console.log('new coin created of type', coin_type)
  const baseCoin = document.getElementById('base-coin-' + coin_type) 
  const newCoin = baseCoin.cloneNode()
  
  let i = 1;
  while(i !== null) {
   if(document.getElementById(`coin_${i}`)) i++
   else {
     newCoin.id = `coin_${i}`;
     i = null;
   }
   newCoin.className += ' active-slot' 
  //  console.log('new coin created of type',newCoin)
  }
  return newCoin
}