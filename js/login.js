document.addEventListener('DOMContentLoaded', () => {
    const username = getCookie('localusername');

    // Redirect logged-in users from login page
    if (username) {
        window.location.href = 'index.html';
    }
});