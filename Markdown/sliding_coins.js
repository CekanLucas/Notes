// define coin-slots should be able to handle dragged items being dropped there
const coinSlots = document.querySelectorAll('.active-slot')
coinSlots.forEach((slot, i) => {
  console.log('Slot element', slot, i)
  const el = document.getElementById(slot.id)
  el.addEventListener('dragenter', dragEnter_handler)
  el.addEventListener('dragleave', dragLeave_handler)
  el.addEventListener('dragover', dragOver_handler)
  el.addEventListener('drop', drop_handler)
})
const coins = document.querySelectorAll('.coin')
coins.forEach((coin, i) => {
  console.log('coin', coin, i)
  coin.addEventListener('dragstart', dragStart_handler)
})

function dragStart_handler(e) {
  // e.preventDefault() //breaks functionality for some reason
  const dt = e.dataTransfer
  e.target.classList.forEach((cl) => {
    if (cl === 'coin-left') dt.setData('coin_type', 'left')
    if (cl === 'coin-right') dt.setData('coin_type', 'right')
    if (cl === 'base-coin') dt.setData('coin_slot', 'base')
  })

  dt.effectAllowed = 'move'
  dt.dropEffect = 'move'

  const dragGhostImg = document.getElementById(
    `base-coin-${dt.getData('coin_type')}`,
  )
  dt.setDragImage(dragGhostImg, 25, 25)

  console.log('datatransfer', dt.getData('coin_type'))
  console.log('dragstart fired:\t', e, dt.items.length)
}
function dragEnter_handler(e) {
  e.preventDefault()
  const slot = e.target

  slot.replaceChildren()
  e.target.appendChild(create_new_coin('blank'))

  console.log('dragenter fired:\t', e, e.dataTransfer.items.length)
}
function dragLeave_handler(e) {
  e.preventDefault()
  const slot = e.target
  slot.replaceChildren()
  console.log('dragLeave fired:\t', e, e.dataTransfer.items.length)
}
function dragOver_handler(e) {
  e.preventDefault()
  const slot = e.target

  slot.replaceChildren()
  e.target.appendChild(create_new_coin('blank'))

  console.log('dragover fired:\t', e, e.dataTransfer.items.length)
}

function drop_handler(e) {
  // e.dataTransfer.dropEffect = 'move'
  e.preventDefault()

  const dt = e.dataTransfer
  const coin_type = dt.getData('coin_type')
  const slot = e.target
  slot.replaceChildren()
  const newCoin = create_new_coin(coin_type)
  slot.appendChild(newCoin)
  console.log('drop event fired:\t', e, e.dataTransfer.items.length)
}

// DOM METHODS

function create_new_coin(coinType) {
  // console.log('new coin created of type', coin_type)
  const baseCoin = document.getElementById('base-coin-left')
  const newCoin = baseCoin.cloneNode()
  newCoin.classList.remove('base-coin')
  newCoin.classList.replace('coin-left', 'coin-' + coinType)

  let i = 1
  while (i !== null) {
    if (document.getElementById(`coin_${i}`)) i++
    else {
      newCoin.id = `coin_${i}`
      i = null
    }
    console.log('new coin created of type', newCoin)
  }
  return newCoin
}
