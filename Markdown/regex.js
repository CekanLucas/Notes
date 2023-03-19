const playgroundEl = document.getElementById('playground');
const regexEl = document.getElementById('regex');
let playgroundValue = playgroundEl.textContent;

regexEl.addEventListener('input', (e) => {
  const regexPattern = new RegExp(e.target.value, 'g');
  const replaceMatch =
    '<span class="bg-blue-200 bg-opacity-10 text-blue-500">$&</span>';

  playgroundValue = playgroundEl.textContent; // update

  playgroundEl.innerHTML = playgroundValue.replaceAll(
    regexPattern,
    replaceMatch
  );
});
