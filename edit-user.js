// Get user ID from the URL
const userId = new URLSearchParams(window.location.search).get('id');

// Fetch user details from backend API
async function fetchUserDetails() {
  const response = await fetch(`https://your-backend-api.com/users/${userId}`);
  const user = await response.json();

  document.getElementById('user-name').value = user.name;
  document.getElementById('user-username').value = user.username;
  document.getElementById('user-role').value = user.role;
}

// Call fetchUserDetails on page load
document.addEventListener('DOMContentLoaded', fetchUserDetails);

// Handle form submission to update user
document.getElementById('edit-user-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const updatedUser = {
    name: document.getElementById('user-name').value,
    username: document.getElementById('user-username').value,
    role: document.getElementById('user-role').value,
  };

  const response = await fetch(`https://your-backend-api.com/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    alert('User updated successfully!');
    window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
  }
});
