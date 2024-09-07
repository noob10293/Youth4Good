// Adjust UI based on login state
document.addEventListener('DOMContentLoaded', () => {
    const username = getCookie('username');

    // Hide login link if user is logged in
    const loginLink = document.getElementById('login-link');
    if (loginLink && username) {
        loginLink.style.display = 'none';
    }
});
