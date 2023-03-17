const textEl = document.getElementById('text');
const regexEl = document.getElementById('regex');

const [textValue, regexValue] = [textEl.textContent, regexEl.value];

regexEl.addEventListener('change', (e) => {
  const regexPattern = new RegExp(e.target.value, 'g')
  const replaceMatch = "<span class=\"bg-blue-200 bg-opacity-10 text-blue-500\">$&</span>"

  textEl.innerHTML = textValue.replaceAll(regexPattern, replaceMatch)
  
  console.log(regexPattern)
})