// Adjust UI based on login state

console.log("HI")
document.addEventListener('DOMContentLoaded', () => {
    const loggedin = getCookie('loggedin');

    // Hide login link if user is logged in
    const loginLink = document.getElementById('login');
    const logout = document.getElementById('logout');
    if (loggedin) {
        console.log("HI")
        loginLink.style.display = 'none';
        logout.style.display = 'block';
    }
});
