const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Validate the form input values
  if (usernameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || confirmPasswordInput.value === '') {
    alert('Please fill in all fields');
    return;
  }
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match');
    return;
  }

  // If form input values are valid, create a new user object
  const user = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };

  // TODO: send the user object to a server or save it to local storage

  // Display a success message to the user
  alert('User registered successfully!');
});
