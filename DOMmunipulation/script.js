const btn = document.querySelector('#clickCreateElement');
btn.onclick = e => console.log(e);

btn.addEventListener('mouseleave', function (e) {
  e.target.style.background = 'red !important';
});

// $('#clickCreateElement').click( () => {
//   const container = document.querySelector("#lab");
//   const newTextContent = document.createTextNode("HelloWorld");
//   const newDiv = document.createElement('div');

//   newDiv.appendChild(newTextContent);
//   container.appendChild(newDiv);
// })