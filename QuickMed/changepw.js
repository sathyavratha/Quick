// change-password.js

/**
 * Toggles the visibility of a password input field.
 * @param {string} id The ID of the password input element.
 */
function togglePasswordVisibility(id) {
    const input = document.getElementById(id);
    if (input) {
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const changePasswordForm = document.getElementById('changePasswordForm');
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function(event) {
            // Prevent default form submission to handle validation first
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Get error message spans
            const usernameError = document.getElementById('usernameError');
            const currentPasswordError = document.getElementById('currentPasswordError');
            const newPasswordError = document.getElementById('newPasswordError');
            const confirmPasswordError = document.getElementById('confirmPasswordError');

            // Clear previous error messages
            usernameError.textContent = '';
            currentPasswordError.textContent = '';
            newPasswordError.textContent = '';
            confirmPasswordError.textContent = '';

            let isValid = true;

            // Username validation
            if (username === '') {
                usernameError.textContent = 'Username or Email cannot be empty.';
                isValid = false;
            }

            // Current Password validation (basic check, would involve backend in real app)
            if (currentPassword === '') {
                currentPasswordError.textContent = 'Current password cannot be empty.';
                isValid = false;
            }

            // New Password length validation
            if (newPassword.length < 8) {
                newPasswordError.textContent = 'New password must be at least 8 characters long.';
                isValid = false;
            }

            // New Password and Confirm Password match validation
            if (newPassword !== confirmPassword) {
                confirmPasswordError.textContent = 'New password and confirm password do not match.';
                isValid = false;
            }

            // If all client-side validations pass
            if (isValid) {
                // In a real application, you would send this data to a server for verification and actual password change.
                // This typically involves an AJAX request (e.g., using fetch() or Axios).
                console.log('Form is valid. Attempting password change...');
                console.log({ username, currentPassword, newPassword });

                // Simulate success and redirect
                alert('Password changed successfully! Redirecting to home page.');
                window.location.href = 'home.html'; // Redirect to your home page
            }
        });
    }
});