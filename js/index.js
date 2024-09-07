// Adjust UI based on login state
document.addEventListener('DOMContentLoaded', () => {
    const loggedin = getCookie('loggedin');

    // Hide login link if user is logged in
    const loginLink = document.getElementById('login');
    if (loginLink && loggedin) {
        loginLink.style.display = 'none';
    }
});
