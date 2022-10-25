document
  .getElementById('base-coin-left')
  .addEventListener('dragstart', dragStart_handler)
document
  .getElementById('base-coin-right')
  .addEventListener('dragstart', dragStart_handler)

function dragStart_handler(e) {
  const coinType = e.target.id === 'base-coin-left' ? 'left' : 'right'
  const dt = e.dataTransfer

  e.target.classList.forEach((cl) => {
    if(cl==='coin-left') dt.setData('coin_type', 'left')
    if(cl==='coin-right') dt.setData('coin_type', 'right')
    if(cl==='base-coin') dt.setData('coin_slot', 'base')
  })

  dt.effectAllowed = 'move'

  e.dataTransfer.setDragImage(e.target, 25, 25);

  console.log('dragstart fired:\t', e)
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
  // here append newcoin onto slot
  // const newCoin = create_new_coin(coinType)
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

function create_new_coin(coinType) {
  // console.log('new coin created of type', coin_type)
  const baseCoin = document.getElementById('base-coin-' + coinType)
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

function dragImageCoin(coinType) {
  const baseCoin = document.getElementById('base-coin-' + coinType)
  const coinEl = baseCoin.cloneNode()
  coinEl.className += ' drag-image' 
  console.log('dragImage Coin:', coinEl)
  return coinEl
}