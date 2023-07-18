<!DOCTYPE html>
<html>
<head>
  <title>User Profile</title>
</head>
<body>
  <?php
    // Check if the user is logged in
    session_start();
    if (isset($_SESSION['username'])) {
      $username = $_SESSION['username'];
      $email = $_SESSION['email'];
  ?>
  <h1>Welcome, <?php echo $username; ?>!</h1>
  <p>Your profile information:</p>
  <ul>
    <li><strong>Username:</strong> <?php echo $username; ?></li>
    <li><strong>Email:</strong> <?php echo $email; ?></li>
  </ul>
  <?php
    } else {
      header('Location: login.php');
      exit;
    }
  ?>
</body>
</html>