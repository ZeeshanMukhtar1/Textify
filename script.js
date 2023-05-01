// Get the 'Uppercase' button element and the 'Inp__text' input element
const UppercaseEl = document.getElementById('Uppercase');
const Inp__textEl = document.getElementById('Inp__text');

// Add a click event listener to the 'Uppercase' button that sets the value of the 'Inp__text' input element to its uppercase version
UppercaseEl.addEventListener('click', () => {
  Inp__textEl.value = Inp__textEl.value.toUpperCase();
});

// Get the 'Lowercase' button element
const LowercaseEl = document.getElementById('Lowercase');

// Add a click event listener to the 'Lowercase' button that sets the value of the 'Inp__text' input element to its lowercase version
LowercaseEl.addEventListener('click', () => {
  Inp__textEl.value = Inp__textEl.value.toLowerCase();
});

// Get the 'Char__count' and 'Word__count' elements
const Char__countEl = document.getElementById('Char__count');
const Word__countEl = document.getElementById('Word__count');

// Add an 'input' event listener to the 'Inp__text' input element that updates the 'Char__count' and 'Word__count' elements with the character count and word count of the input value, respectively
Inp__textEl.addEventListener('input', () => {
  Char__countEl.innerText = Inp__textEl.value.length;
  Word__countEl.innerText = Inp__textEl.value.trim().split(' ').length;
});

// Get the 'clear__btn' button element
const clear__btnEl = document.getElementById('clear__btn');

// Add a click event listener to the 'clear__btn' button that clears the value of the 'Inp__text' input element
clear__btnEl.addEventListener('click', () => {
  Inp__textEl.value = '';
});

// Get the 'Copy__btn' button element
const Copy__btnEl = document.getElementById('Copy__btn');

// Add a click event listener to the 'Copy__btn' button that copies the value of the 'Inp__text' input element to the clipboard and shows an alert message
Copy__btnEl.addEventListener('click', () => {
  navigator.clipboard.writeText(Inp__textEl.value);
  alert('Text copied successfully');
});

// Get the 'Spaces__Removal__btn' button element
const Spaces__Removal__btnEL = document.getElementById('Spaces__Removal__btn');

// Add a click event listener to the 'Spaces__Removal__btn' button that removes extra spaces in the value of the 'Inp__text' input element
Spaces__Removal__btnEL.addEventListener('click', () => {
  Inp__textEl.value = Inp__textEl.value.replace(/\s+/g, ' ').trim();
});

// Get the 'Clean__Lines__btn' button element
const Clean__Lines__btnEl = document.getElementById('Clean__Lines__btn');

// Add a click event listener to the 'Clean__Lines__btn' button that removes extra line breaks in the value of the 'Inp__text' input element
Clean__Lines__btnEl.addEventListener('click', () => {
  Inp__textEl.value = Inp__textEl.value.replace(/\n+/g, '\n').trim();
});
