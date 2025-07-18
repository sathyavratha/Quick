// signin.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm'); // Corrected form ID
    
    // Get references to input fields
    const dobInput = document.getElementById('dob');
    const passwordInput = document.getElementById('pswd');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phno');

    // Get references to error message spans
    const dobError = document.getElementById('dobError');
    const passwordError = document.getElementById('passwordError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');

    if (form) {
        form.addEventListener('submit', (event) => {
            // Prevent default form submission to handle validation
            event.preventDefault();

            let isValid = true;

            // Clear all previous error messages
            dobError.textContent = '';
            passwordError.textContent = '';
            emailError.textContent = '';
            phoneError.textContent = '';

            // --- Date of Birth validation ---
            const today = new Date();
            const dob = new Date(dobInput.value);
            if (!dobInput.value) { // Check if DOB is empty
                dobError.textContent = 'Date of birth is required.';
                isValid = false;
            } else if (dob > today) {
                dobError.textContent = 'Date of birth cannot be in the future.';
                isValid = false;
            }

            // --- Password strength validation (min 8 characters) ---
            if (passwordInput.value.length < 8) {
                passwordError.textContent = 'Password must be at least 8 characters long.';
                isValid = false;
            }

            // --- Email format validation ---
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email is required.';
                isValid = false;
            } else if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // --- Phone number validation (e.g., 10-15 digits) ---
            const phonePattern = /^\d{10,15}$/; // Allows 10 to 15 digits
            if (!phoneInput.value.trim()) {
                phoneError.textContent = 'Phone number is required.';
                isValid = false;
            } else if (!phonePattern.test(phoneInput.value.trim())) {
                phoneError.textContent = 'Please enter a valid phone number (10-15 digits).';
                isValid = false;
            }

            // If all validations pass, allow the form to submit
            if (isValid) {
                console.log('Registration form is valid. Submitting...');
                // In a real application, you would send this data to a server.
                // For this example, we proceed with the form action to login.html
                form.submit(); // Manually submit the form if JavaScript validation passes
            }
        });
    }
});