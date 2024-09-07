function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("HI")
    const username = getCookie('loggedin');

    // Redirect logged-in users from login page
    if (username) {
        window.location.href = 'index.html';
    }
});