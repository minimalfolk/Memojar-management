// Show/Hide password functionality
const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');

togglePassword.addEventListener('click', function () {
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;

  // Toggle the eye icon to show/hide
  eyeIcon.textContent = type === 'password' ? '👁️' : '🙈';
});

// Gmail Login (simulated)
document.getElementById('gmail-login').addEventListener('click', function () {
  // Redirect to Gmail login or perform the Gmail login logic
  alert('Redirecting to Gmail login...');
});

// Form submit handling (example)
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Example login logic
  console.log(`Email: ${email}, Password: ${password}`);

  // Simulate successful login
  alert('Login successful!');
});
