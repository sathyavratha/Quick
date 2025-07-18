// book.js

document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (event) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            // Basic validation checks
            if (!name) {
                alert('Please enter your full name.');
                event.preventDefault();
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return;
            }

            if (phone.length < 10 || phone.length > 15) {
                alert('Please enter a valid phone number (10-15 digits).');
                event.preventDefault();
                return;
            }

            if (!date) {
                alert('Please select a preferred date.');
                event.preventDefault();
                return;
            }

            if (!time) {
                alert('Please select a preferred time.');
                event.preventDefault();
                return;
            }

            // You could add more complex validation here, e.g., checking if the date is in the future.
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0,0,0,0); // Reset time for comparison
            if (selectedDate < today) {
                alert('Please select a future date for your appointment.');
                event.preventDefault();
                return;
            }


            console.log('Appointment form is valid. Submitting...');
            // The form's action will redirect to appointmentsuccess.html on success.
        });
    }
});