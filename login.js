document.addEventListener('DOMContentLoaded', () => {
    const username = getCookie('username');

    // Redirect logged-in users from login page
    if (username) {
        window.location.href = '';
    }
});