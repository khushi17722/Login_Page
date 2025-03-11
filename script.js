document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.includes('@') || password.length < 6) {
        alert('Please enter a valid email and a password with at least 6 characters.');
        return;
    }

    // Simulating authentication (replace with actual backend call)
    if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to another page
    } else {
        alert('Invalid email or password.');
    }
});