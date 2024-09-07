document.addEventListener('DOMContentLoaded', () => {
    const username = getCookie('username');

    // Redirect logged-in users from login and register pages
    if (username && (window.location.pathname === '/login' || window.location.pathname === '/register')) {
        window.location.href = '/';
    }
});