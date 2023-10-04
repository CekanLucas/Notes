$(function () {
  const [$list, $newItemForm, $newItemButton] = [
    $('ul'),
    $('#newItemForm'),
    $('#newItemButton'),
  ];

  // Hide list items then fade them in
  $('li')
    .hide()
    .each(function (index) {
      $(this)
        .delay(450 * index)
        .fadeIn(1600);
    });

  // ITEM COUNTER
  function updateCount() {
    const items = $('li[class!=complete]').length;
    $('#counter').text(items);
  }
  updateCount();

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();
  $newItemForm.hide();
  $('#showForm').on('click', function () {
    $newItemButton.hide();
    $newItemForm.show();
  });

  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function (e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li>' + text + '</li>');
    $('input:text').val('');
    updateCount();
  });

  // add Date //todo: doesn't work
  $('li').on('click', function addClickDate(e) {
    $('li span').remove();
    const date = new Date();
    date.setTime(e.timeStamp);
    const clicked = date.toDateString();
    $(this).append(`<i class="date">${clicked} ${e.type}</i>`);
  });

  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
  $list.on('click', 'li', function () {
    const complete = $(this).hasClass('complete');

    if (complete === true) {
      $(this).animate(
        {
          opacity: 0.0,
          paddingLeft: '+=180',
        },
        500,
        'swing',
        function () {
          $(this).remove();
        }
      );
    } else {
      item = $(this).text();
      $(this).remove();
      $list
        .append('<li class="complete">' + item + '</li>')
        .hide()
        .fadeIn(300);
      updateCount();
    }
  });
});
