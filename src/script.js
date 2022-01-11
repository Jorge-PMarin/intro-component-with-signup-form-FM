const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', checkInputs);

function checkInputs(e) {
  e.preventDefault();
  const firstNameValue = document.querySelector('#first-name').value.trim();
  const lastNameValue = document.querySelector('#last-name').value.trim();
  const emailValue = document.querySelector('#email').value.trim();
  const passwordValue = document.querySelector('#password').value.trim();

  firstNameValue.length == 0 ? setError(firstName) : unsetError(firstName);
  lastNameValue.length == 0 ? setError(lastName) : unsetError(lastName);
  emailValue.length == 0 ? setError(email) : unsetError(email);
  passwordValue.length == 0 ? setError(password) : unsetError(password);
}

function setError(input) {
  const formGroup = input.closest('.intro__form-group');
  formGroup.classList.add('active');
}

function unsetError(input) {
  const formGroup = input.closest('.intro__form-group');
  formGroup.classList.remove('active');
}
