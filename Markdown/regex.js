const playgroundEl = document.getElementById('playground');
const regexEl = document.getElementById('regex');

const [playgroundValue, regexValue] = [playgroundEl.textContent, regexEl.value];

regexEl.addEventListener('change', (e) => {
  const regexPattern = new RegExp(e.target.value, 'g')
  const replaceMatch = "<span class=\"bg-blue-200 bg-opacity-10 text-blue-500\">$&</span>"

  playgroundEl.innerHTML = playgroundValue.replaceAll(regexPattern, replaceMatch)
  
  console.log(regexPattern)
})