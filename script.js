// Modern Login Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    togglePassword.addEventListener('click', function() {
        // Toggle the password field type between 'password' and 'text'
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle the eye icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
    
    // Form submission handling
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = passwordInput.value.trim();
        const rememberMe = document.getElementById('remember').checked;
        
        // Basic validation
        if (username === '') {
            showError('Por favor, insira seu nome de usuário ou email');
            return;
        }
        
        if (password === '') {
            showError('Por favor, insira sua senha');
            return;
        }
        
        // Simulate login - in a real application, this would be an API call
        simulateLogin(username, password, rememberMe);
    });
    
    // Add subtle animation to inputs when focused
    const inputs = document.querySelectorAll('.input-group input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('input-focused');
        });
    });
});

// Function to show error message
function showError(message) {
    // Check if an error message already exists
    let errorElement = document.querySelector('.error-message');
    
    if (!errorElement) {
        // Create error element if it doesn't exist
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        
        // Insert it after the form
        const form = document.querySelector('.login-form');
        form.parentNode.insertBefore(errorElement, form.nextSibling);
    }
    
    // Set the error message
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    
    // Hide the error after 3 seconds
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}

// Function to simulate login process
function simulateLogin(username, password, rememberMe) {
    // Show loading state on button
    const loginButton = document.querySelector('.login-button');
    const originalText = loginButton.textContent;
    loginButton.textContent = 'Entrando...';
    loginButton.disabled = true;
    
    // Simulate API call with timeout
    setTimeout(() => {
        // In a real application, this would be replaced with actual authentication logic
        console.log('Login attempt:', { username, password, rememberMe });
        
        // For demo purposes, always show success
        // In a real app, this would depend on the API response
        showSuccess();
        
        // Reset button
        loginButton.textContent = originalText;
        loginButton.disabled = false;
    }, 1500);
}

// Function to show success message and redirect
function showSuccess() {
    // Create success message
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.textContent = 'Login bem-sucedido! Redirecionando...';
    
    // Insert it after the form
    const form = document.querySelector('.login-form');
    form.parentNode.insertBefore(successElement, form.nextSibling);
    
    // In a real application, you would redirect to the dashboard or home page
    setTimeout(() => {
        // Redirect logic would go here
        // window.location.href = 'dashboard.html';
        
        // For demo purposes, just hide the success message
        successElement.style.display = 'none';
    }, 2000);
}