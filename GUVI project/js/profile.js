const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const profileName = document.querySelector('.profile h1');
const profileEmail = document.querySelector('.profile p');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Update the profile name and email with the form input values
  profileName.textContent = nameInput.value;
  profileEmail.textContent = emailInput.value;

  // Clear the form input fields
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  // Display a success message to the user
  alert('Form submitted successfully!');
});