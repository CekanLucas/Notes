// define coin-slots should be able to handle dragged items being dropped there
const coinSlots = document.querySelectorAll('.active-slot')
coinSlots.forEach((slot, i) => {
  console.log('Slot element', slot, i)
  const el = document.getElementById(slot.id)
  el.addEventListener('dragenter', dragEnter_handler)
  el.addEventListener('dragover', dragOver_handler)
  el.addEventListener('dragleave', dragLeave_handler)
  el.addEventListener('drop', drop_handler)
})
const coins = document.querySelectorAll('.coin')
coins.forEach((coin) => {
  coin.addEventListener('dragstart', dragStart_handler)
})

function dragStart_handler(e) {
  // e.preventDefault() //breaks functionality for some reason
  const dt = e.dataTransfer
  e.target.classList.forEach((cl) => {
    if (cl === 'coin-left') dt.setData('coin_type', 'left')
    if (cl === 'coin-right') dt.setData('coin_type', 'right')
    if (cl === 'base-coin') dt.setData('coin_id', 'base')
    else dt.setData('coin_id', e.target.id)
  })

  dt.setData(dt.getData('coin_type'), e.target.id)

  dt.effectAllowed = 'move'
  dt.dropEffect = 'move'

  const dragGhostImg = document.getElementById(
    `base-coin-${dt.getData('coin_type')}`,
  )
  dt.setDragImage(dragGhostImg, 25, 25)
  console.log('dragstart fired:\t', e, dt.items.length)
}
function dragEnter_handler(e) {
  e.preventDefault()
  const dt = e.dataTransfer
  const slot = e.target
  if (!slot.firstElementChild) {
    const coinType = dt.types.find((type) =>
      type === 'left' || type === 'right' ? true : false,
    )
    slot.appendChild(create_new_coin(coinType + ' coin-blank'))
  }
  console.log('dragenter fired:\t', e, e.dataTransfer.items.length)
}

function dragOver_handler(e) {
  e.preventDefault()
  console.log('dragover fired:\t', e, e.dataTransfer.items.length)
}

function dragLeave_handler(e) {
  e.preventDefault()
  const slot = e.target
  if (slot.children) {
    const coin = slot.firstElementChild
    if (coin.classList.contains('coin-blank')) slot.replaceChildren()
  }
  console.log('dragLeave fired:\t', e, e.dataTransfer.items.length)
}

function drop_handler(e) {
  //toodo delete coin if dropped outside coinSlots
  // e.dataTransfer.dropEffect = 'move'
  e.preventDefault()

  const dt = e.dataTransfer
  const coin_type = dt.getData('coin_type')
  const slot = e.target
  slot.replaceChildren()

  if (dt.getData('coin_id') === 'base') {
    const newCoin = create_new_coin(coin_type)
    slot.appendChild(newCoin)
  } else move_coin(dt.getData('coin_id'), slot.id)
  console.log('drop event fired:\t', e, e.dataTransfer.items.length)
}

// DOM METHODS

function create_new_coin(coinType) {
  const baseCoin = document.getElementById('base-coin-left')
  const newCoin = baseCoin.cloneNode()
  newCoin.classList.remove('base-coin')
  const coinClasses = newCoin.className.replace('coin-left', 'coin-' + coinType)
  newCoin.className = coinClasses
  let i = 1
  while (i !== null) {
    if (document.getElementById(`coin_${i}`)) i++
    else {
      newCoin.id = `coin_${i}`
      i = null
    }
    console.log('new coin created of type', newCoin, newCoin.className)
  }
  return newCoin
}

function move_coin(coinId, slotId) {
  const coin = document.getElementById(coinId)
  const id = coinId.match(/\d+/)[0]
  const oldSlot = coin.parentElement.id
  const oldSlotId = oldSlot.match(/\d+/)[0]
  const slot = document.getElementById(slotId)
  const slotIdNum = slotId.match(/\d+/)[0]

  ;(function isMoveLegal(slot, oldslot) {})(slotIdNum, oldSlotId)

  slot.append(coin)
}
