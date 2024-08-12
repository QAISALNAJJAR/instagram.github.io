// This script will handle client-side validation and interactions

// Function to validate email format
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to handle form submission with validation
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const emailInput = form.querySelector('input[name="email"]');
    const passwordInput = form.querySelector('input[name="password"]');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    form.submit(); // Proceed with form submission if valid
}

// Add event listeners to forms
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-box form');
    const forgetPasswordForm = document.querySelector('.forget-password-box form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (forgetPasswordForm) {
        forgetPasswordForm.addEventListener('submit', handleFormSubmit);
    }
});
