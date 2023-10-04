$( function(){
    
  const $eventParameter = $('.event-parameter');
  const $eventParameterDescription = $('#event-parameter');

  $eventParameter.on( 'mouseover click', 
    {
      events: 'event in question, you can do multiple events by space separated list of event name eg <code>focus click</code>',
      selector: 'If you want to further filter to a subset of the jquery selection',
      data: 'You can pass information which will passed on by the e object',
      function: 'this is the behavior that runs when one of the events triggers', 
      event: 'in the function a event object is passed'
    }, 
    function(e){
      $eventParameterDescription.html(e.data[$(this).text()]);
      console.log($(this).text())
    })
})
