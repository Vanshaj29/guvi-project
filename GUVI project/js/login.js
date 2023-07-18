const form = document.getElementById("login-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === "admin" && password === "password123") {
    console.log("Login successful!");
  } else {
    console.log("Invalid username or password!");
  }
});