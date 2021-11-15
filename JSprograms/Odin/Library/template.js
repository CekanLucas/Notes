var firstPass = true

$('#firstLine').on('animationend', function () {
  if (firstPass) {
    $('#secondLine').addClass('animated fadeInUp')
    $('#secondLine').css('visibility', 'visible')
    $('hr').css('visibility', 'visible')
    $('hr').addClass('animated fadeInLeft')
    firstPass = false
  }
})

$('#secondLine').on('animationend', function () {
  $('body').addClass('movedBackground')
})

$('body').on('transitionend', function () {
  // fillLibrary()
  $('#library').css('visibility', 'visible')
  $('#library').addClass('animated fadeIn')
  $('#entryBox').css('visibility', 'visible')
  $('#entryBox').addClass('animated fadeIn')
  $('#navBottom').css('visibility', 'visible')
  $('#navBottom').addClass('animated fadeIn')
})

$('input').on('focusin', function () {
  $('#firstLine').addClass('fadeOutRight')
  $('#secondLine').addClass('fadeOutLeft')
  $('#ready').css('visibility', 'visible')
  $('#ready').addClass('fadeIn')
  $('#ready').removeClass('fadeOut')
  $('#rocketShip').css('visibility', 'visible')
  var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) {
      return i * 250
    },
    direction: 'normal',
  })
})

$('input').on('focusout', function () {
  $('#firstLine').addClass('fadeInRight')
  $('#firstLine').removeClass('fadeOutRight fadeInDown')
  $('#secondLine').addClass('fadeInLeft')
  $('#secondLine').removeClass('fadeOutLeft fadeInUp')
  $('#ready').removeClass('fadeIn')
  $('#ready').addClass('fadeOut')
  var lineDrawing = anime({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) {
      return i * 250
    },
    direction: 'reverse',
  })
})

$('button').on('click', function () {
  appendBook()
  moveContent()
})

var name = ''

function moveContent() {
  name = getName()
  $('#titles').animate(
    {
      // marginTop: '-800px',
    },
    1500,
    function () {
      $('#titles').html(' ')
      $('#titles').css('margin-top', '120px')
      $('#titles').html(
        "<h1 id='afterAnimationHeader' class='animated fadeIn'>" +
          name +
          ', this is your new story.</h1>',
      )
    },
  )
}

function getName() {
  return $('#title-input').val()
}

$('#title-input').on('keyup', function (e) {
  if (e.keyCode == 13) {
    moveContent()
  }
})

function fillLibrary() {
  const library = initLibrary().library
  library.forEach((book) => {
    getBookCard(book)
  })
}

function getBookCard(book) {
  $('#library').append(`<div class="card">
  <span class="book-title">${book.title}</span>
  <span class="book-author">${book.author}</span>
  <span class="book-publication-year">${book.dateOfPublication}</span>
</div>`)
}

function appendBook() {
  const title = $('#title-input').val()
  const author = $('#author-input').val()
  const dateOfPublication = $('#dateOfPublication-input').val()
  getBookCard({ title, author, dateOfPublication })
}
