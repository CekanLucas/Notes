(function () {
  console.log("Hello World")
  document.addEventListener('DOMContentLoaded', function loadScript() {
    syncListStyleWithPrevEl();
  });
})();

/** The element before list `ul`, `ol` is usually the heading here we sync styles together so we can make list headings */
function syncListStyleWithPrevEl() {
  const listEl = Array.from(document.querySelectorAll('ul, ol'));
  listEl.forEach((el) => {
    const prevEl = getPrevNonEmptyEl(el);
    if(prevEl == null)
      return
    const liEl = el.firstElementChild;
    if (liEl) {
      const liColor = window.getComputedStyle(liEl).getPropertyValue('color');

      if (prevEl && prevEl.style)
        prevEl.style.color = liColor;
    } else {
      console.info('No list elements found');
    }
  });
}

function getPrevNonEmptyEl(el) {
  const prevEl = el.previousElementSibling;
  if(prevEl === null){
    return null
  }
  console.log(prevEl, prevEl.textContent)
  return prevEl.textContent !== null && prevEl.textContent !== ''
    ? prevEl
    : getPrevNonEmptyEl(prevEl);
}
