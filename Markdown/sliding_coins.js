document
  .getElementById('base-coin-left')
  .addEventListener('dragstart', dragStart_handler)
document
  .getElementById('base-coin-right')
  .addEventListener('dragstart', dragStart_handler)

function dragStart_handler(e) {
  const coin_type = e.target.id === 'base-coin-left' ? 'left' : 'right'
  const newCoin = create_new_coin(coin_type)
  const dt = e.dataTransfer

  dt.setData('text/plain', coin_type)
  dt.setData('text/html', newCoin.outerHTML)
  // dt.setData('application/x-moz-node', newCoin) // firefox says security risk

  dt.effectAllowed = 'move'
  console.log('dragstart fired:\t', e)

  // dt.items[0].getAsString(  (d) => console.log('getAsString', d)   )
}

// define coin-slots should be able to handle dragged items being dropped there
const coinSlots = document.querySelectorAll('.active-slot')
coinSlots.forEach((slot, i) => {
  console.log('Slot element', slot, i)
  const el = document.getElementById(slot.id)
  el.addEventListener('dragenter', dragEnter_handler)
  el.addEventListener('dragleave', dragLeave_handler)

  // el.addEventListener('dragover', dragOver_handler)
})

function dragLeave_handler(e) {
  // e.dataTransfer.dropEffect = 'move';
  e.preventDefault()
  // debugger;
  if (e.dataTransfer.dropEffect == 'move') {
    // remove the dragged element
    const slot = e.target
    const coin = slot.firstChild
    if (coin !== null) coin.remove()
  }
  console.log('dragLeave fired:\t', e)
}

function dragEnter_handler(e) {
  e.dataTransfer.dropEffect = 'move'
  e.preventDefault()
  console.log('dragenter fired:\t', e)
}
function dragOver_handler(e) {
  e.dataTransfer.dropEffect = 'move'
  e.preventDefault()
  console.log('dragover fired:\t', e)
}

// DOM METHODS

function create_new_coin(coin_type) {
  // console.log('new coin created of type', coin_type)
  const baseCoin = document.getElementById('base-coin-' + coin_type)
  const newCoin = baseCoin.cloneNode()

  let i = 1
  while (i !== null) {
    if (document.getElementById(`coin_${i}`)) i++
    else {
      newCoin.id = `coin_${i}`
      i = null
    }
    newCoin.className += ' active-slot'
    //  console.log('new coin created of type',newCoin)
  }
  return newCoin
}
