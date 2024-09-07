console.log("LOGIN>JIS")
document.addEventListener('DOMContentLoaded', () => {
    console.log("HI")
    const username = getCookie('loggedin');

    // Redirect logged-in users from login page
    if (username) {
        window.location.href = 'index.html';
    }
});