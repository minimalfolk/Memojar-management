// Function to toggle password visibility
function togglePassword() {
  const passwordField = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');

  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    eyeIcon.innerText = '🙈'; // Change to hide icon
  } else {
    passwordField.type = 'password';
    eyeIcon.innerText = '👁️'; // Change to show icon
  }
}

// Placeholder for Gmail Login
function loginWithGmail() {
  alert("Redirecting to Gmail login... (You can integrate Google's OAuth API here.)");
}
