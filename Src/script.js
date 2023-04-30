UppercaseEl = document.getElementById('Uppercase');
Inp__textEl = document.getElementById('Inp__text');
UppercaseEl.addEventListener('click', () => {
  //   console.log('Upper btn clicked');
  Inp__textEl.value = Inp__textEl.value.toUpperCase();
});

LowercaseEl = document.getElementById('Lowercase');
LowercaseEl.addEventListener('click', () => {
  //   console.log('Lower btn clicked ');
  Inp__textEl.value = Inp__textEl.value.toLowerCase();
});

Char__countEl = document.getElementById('Char__count');
Word__countEl = document.getElementById('Word__count');

Inp__textEl.addEventListener('input', () => {
  Char__countEl.innerText = Inp__textEl.value.length;
  Word__countEl.innerText = Inp__textEl.value.trim().split(' ').length;
});

clear__btnEl = document.getElementById('clear__btn');
clear__btnEl.addEventListener('click', () => {
  // console.log('text cleared');
  Inp__textEl.value = '';
});

Copy__btnEl = document.getElementById('Copy__btn');
Copy__btnEl.addEventListener('click', () => {
  // console.log('text coppied succefully');
  Coppied__textEl = document.getElementById('Copy__btn');
  navigator.clipboard.writeText(Inp__textEl.value);
  alert('Text Coppied succefully');
});
Spaces__Removal__btnEL = document.getElementById('Spaces__Removal__btn');
Spaces__Removal__btnEL.addEventListener('click', () => {
  // console.log('Neaten Tex');
  // Inp__textEl.value = Inp__textEl.value.replaceAll('  ', ' ');
  Inp__textEl.value = Inp__textEl.value.replace(/\s+/g, ' ').trim();
  // https://stackoverflow.com/questions/16974664/how-to-remove-the-extra-spaces-in-a-string
});

Clean__Lines__btnEl = document.getElementById('Clean__Lines__btn');
Clean__Lines__btnEl.addEventListener('click', () => {
  // console.log('De__lined');
  Inp__textEl.value = Inp__textEl.value.replace(/\n+/g, '\n').trim();
});
