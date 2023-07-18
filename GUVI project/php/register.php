<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the form input values
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $confirmPassword = $_POST['confirm_password'];

  // Validate the form input values
  if (empty($username) || empty($email) || empty($password) || empty($confirmPassword)) {
    echo 'Please fill in all fields';
    exit();
  }
  if ($password !== $confirmPassword) {
    echo 'Passwords do not match';
    exit();
  }

  // Hash the password
  $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

  // TODO: store the user data in a database or file

  // Display a success message to the user
  echo 'User registered successfully!';
}
?>
