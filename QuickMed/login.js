// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginErrorMessage = document.getElementById('loginErrorMessage'); // Get the error message div

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevent default form submission so we can handle it with JS
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;

            // Clear any previous error messages
            loginErrorMessage.textContent = '';
            loginErrorMessage.style.display = 'none';

            if (!username || !password) {
                loginErrorMessage.textContent = 'Please enter both username/email and password.';
                loginErrorMessage.style.display = 'block'; // Show the error
                return;
            }

            // --- SIMULATED BACKEND LOGIC (Replace with actual fetch to server in real app) ---
            // For demonstration, let's assume valid credentials are:
            // Username: "testuser" AND Password: "password123"
            // OR Username: "admin@example.com" AND Password: "adminpassword"

            const correctUsername1 = "testuser";
            const correctPassword1 = "password123";

            const correctUsername2 = "admin@example.com";
            const correctPassword2 = "adminpassword";

            if ((username === correctUsername1 && password === correctPassword1) ||
                (username === correctUsername2 && password === correct2)) {
                // Successful login simulation
                console.log('Login successful!');
                alert('Login successful! Redirecting to dashboard.');
                window.location.href = 'dashboard.html'; // Redirect to dashboard on success
            } else {
                // Failed login simulation
                console.log('Login failed: Incorrect username or password.');
                loginErrorMessage.textContent = 'Incorrect username or password.'; // Specific error message
                loginErrorMessage.style.display = 'block'; // Show the error
            }

            // --- END SIMULATED BACKEND LOGIC ---
        });
    }
});