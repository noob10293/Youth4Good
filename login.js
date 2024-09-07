st UI based on login state
document.addEventListener('DOMContentLoaded', () => {
    const username = getCookie('username');

    // Redirect logged-in users from login and register pages
    if (username && (window.location.pathname === '/login' || window.location.pathname === '/register')) {
        window.location.href = '/';
    }

    // Hide login link if user is logged in
    const loginLink = document.getElementById('login-link');
    if (loginLink && username) {
        loginLink.style.display = 'none';
    }
});